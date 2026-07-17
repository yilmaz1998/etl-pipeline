import express from "express";
import { register } from "./metrics.js";

const app = express();

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
}
);

const PORT = process.env.METRICS_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Metrics server listening on port ${PORT}`);
});