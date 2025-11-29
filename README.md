# My Express App

A minimal Express.js server with a few demo endpoints. Useful as a starter for APIs or backend prototypes.

## Features
- Simple Express setup with JSON parsing
- Routes: root, time API, and echo POST
- Ready-to-run scripts for dev and prod

## Prerequisites
- Node.js 18+ (recommended)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   - Development (auto-restart with nodemon):
     ```bash
     npm run dev
     ```
   - Production:
     ```bash
     npm start
     ```
3. Server runs on `http://localhost:3000` by default. Set a custom port with `PORT` env var.

## Scripts
- `npm start` — Runs `node index.js`
- `npm run dev` — Runs `nodemon index.js`

## API
- GET `/` — Health check
  - Response: `Hello from Express!`
- GET `/api/time` — Returns current server time
  - Example:
    ```bash
    curl http://localhost:3000/api/time
    ```
    Response:
    ```json
    { "time": "2025-01-01T12:34:56.789Z" }
    ```
- POST `/api/echo` — Echoes JSON body
  - Example:
    ```bash
    curl -X POST http://localhost:3000/api/echo \
      -H "Content-Type: application/json" \
      -d '{"message":"hello"}'
    ```
    Response:
    ```json
    { "received": { "message": "hello" } }
    ```

## Configuration
- `PORT` — Port for the server (default: 3000)

## Folder Structure
```
.
├─ index.js            # Express server
├─ package.json        # App metadata & scripts
├─ package-lock.json   # Dependency lockfile
└─ node_modules/       # Installed packages
```

## Troubleshooting
- Port in use: change `PORT`, e.g., `PORT=4000 npm start`
- Windows PowerShell (set env var):
  ```powershell
  $env:PORT=4000; npm start
  ```

## License
ISC
