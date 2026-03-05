import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, "../data");
const waitlistFile = path.join(dataDir, "waitlist.json");
const port = Number(process.env.API_PORT ?? 8787);
const corsOrigin = process.env.CORS_ORIGIN ?? "*";

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": corsOrigin,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function ensureWaitlistFile() {
  await mkdir(dataDir, { recursive: true });
  try {
    await readFile(waitlistFile, "utf8");
  } catch {
    await writeFile(waitlistFile, "[]", "utf8");
  }
}

async function loadWaitlist() {
  const content = await readFile(waitlistFile, "utf8");
  return JSON.parse(content);
}

async function saveWaitlist(entries) {
  await writeFile(waitlistFile, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large."));
      }
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, jsonHeaders);
  res.end(JSON.stringify(payload));
}

function normalizeSignup(payload) {
  return {
    name: String(payload?.name ?? "").trim(),
    email: String(payload?.email ?? "").trim().toLowerCase(),
    city: String(payload?.city ?? "").trim(),
    favoriteGenre: String(payload?.favoriteGenre ?? "").trim(),
  };
}

function validateSignup(payload) {
  const errors = [];
  if (!payload.name) {
    errors.push("Name is required.");
  }
  if (!payload.email) {
    errors.push("Email is required.");
  }
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("Email format is invalid.");
  }
  return errors;
}

await ensureWaitlistFile();

const server = createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 400, { error: "Invalid request URL." });
    return;
  }

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const isWaitlistPath = requestUrl.pathname === "/api/waitlist";

  if (req.method === "OPTIONS") {
    res.writeHead(204, jsonHeaders);
    res.end();
    return;
  }

  if (req.method === "GET" && isWaitlistPath) {
    const entries = await loadWaitlist();
    sendJson(res, 200, { count: entries.length, entries });
    return;
  }

  if (req.method === "POST" && isWaitlistPath) {
    try {
      const requestBody = await readRequestBody(req);
      const parsedBody = requestBody ? JSON.parse(requestBody) : {};
      const signup = normalizeSignup(parsedBody);
      const errors = validateSignup(signup);

      if (errors.length > 0) {
        sendJson(res, 400, { error: errors.join(" ") });
        return;
      }

      const entries = await loadWaitlist();
      const existingEntry = entries.find((entry) => entry.email === signup.email);

      if (existingEntry) {
        sendJson(res, 409, { error: "This email is already on the waitlist." });
        return;
      }

      const entry = {
        id: randomUUID(),
        ...signup,
        createdAt: new Date().toISOString(),
      };

      entries.push(entry);
      await saveWaitlist(entries);

      sendJson(res, 201, {
        message: "You have been added to the waitlist.",
        entry,
      });
      return;
    } catch (error) {
      sendJson(res, 500, { error: "Could not process waitlist signup." });
      return;
    }
  }

  sendJson(res, 404, { error: "Route not found." });
});

server.listen(port, () => {
  console.log(`Waitlist API listening on http://localhost:${port}`);
});
