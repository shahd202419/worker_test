import express from 'express'
import { Worker } from 'node:worker_threads'
const app = express()
const port = 3000
app.get('/heavy_task', (req, res) => {
    const worker = new Worker(
        new URL('./worker.js', import.meta.url),
        {
            workerData: 1000000000
        }
    )
    worker.on("message", (result) => {
        if (res.headersSent) return
        res.json({ result })

    })
    worker.on("error", (error) => {
        if (!res.headersSent) {
            res.status(500).json({ error: error.message });
        }
    })
    worker.on("exit", (code) => {
        console.log('worker is exit', code);

    })
})
app.get('/api', (req, res) => {
    res.json({
        message: "api"
    })
})
app.listen(port, () => {
    console.log(`app is running on port ${port}`);

})