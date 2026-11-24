import { parentPort, workerData } from "node:worker_threads"
const number = workerData
let sum = 0
for (let i = 0; i < number; i++) {
    sum += i
}
parentPort?.postMessage(sum)