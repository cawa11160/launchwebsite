# Launch Website

Landing page with waitlist signup. Waitlist entries are stored by a local API in `data/waitlist.json`.

## Run with Docker (recommended)

```sh
docker compose up --build
```

- Frontend: `http://localhost:8080`
- API: `http://localhost:8787/api/waitlist`

Stop:

```sh
docker compose down
```

Waitlist signups are saved to local file `data/waitlist.json` (mounted into the container).

## Run locally (without Docker)

Install dependencies:

```sh
npm install
```

Start frontend and API together:

```sh
npm run dev:all
```

Or start separately:

```sh
npm run dev
npm run dev:api
```

## Waitlist API

- `POST /api/waitlist` adds a signup
- `GET /api/waitlist` returns all signups
- Duplicate emails are rejected
- `name` and `email` are required
