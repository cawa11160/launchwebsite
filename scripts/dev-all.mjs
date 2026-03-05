import { spawn } from "node:child_process";

const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

function runScript(name) {
  return spawn(npmCmd, ["run", name], {
    stdio: "inherit",
    shell: false,
  });
}

const web = runScript("dev");
const api = runScript("dev:api");

function shutdown() {
  web.kill("SIGINT");
  api.kill("SIGINT");
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

web.on("exit", (code) => {
  if (code !== 0) {
    api.kill("SIGINT");
    process.exit(code ?? 1);
  }
});

api.on("exit", (code) => {
  if (code !== 0) {
    web.kill("SIGINT");
    process.exit(code ?? 1);
  }
});
