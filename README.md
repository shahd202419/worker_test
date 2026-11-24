# Worker Threads Practice

A simple Node.js project demonstrating how to use Worker Threads to handle CPU-intensive tasks without blocking the main thread.

## Technologies Used
- Node.js
- Express.js
- Worker Threads
- JavaScript (ES Modules)

## Project Structure
```text
worker_practise/
├── server.js
├── worker.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How It Works
- `server.js` creates an Express server.
- The `/heavy_task` endpoint creates a Worker Thread to execute a CPU-intensive task.
- `worker.js` calculates the sum of numbers and sends the result back to the main thread using `parentPort.postMessage()`.
- The `/api` endpoint demonstrates that the main thread can continue handling requests while the worker is busy.

## Installation

```bash
npm install
```

## Run the Project

```bash
node server.js
```


## Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api` | Returns a simple API response |
| GET | `/heavy_task` | Runs a CPU-intensive task in a Worker Thread |

## Learning Objectives
- Understand the difference between the Main Thread and Worker Threads.
- Handle CPU-intensive tasks without blocking the Event Loop.
- Exchange data between threads using `workerData` and `parentPort`.
- Handle worker events: `message`, `error`, and `exit`.