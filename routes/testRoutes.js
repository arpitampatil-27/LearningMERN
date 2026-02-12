import express from "express";
const router = express.Router();

router.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

router.get("/hello", (req, res) => {
    res.json({ message: "Hello from backend" });
});

router.post("/data",(req, res) => {
    res.json({received: true});
});

export default router;