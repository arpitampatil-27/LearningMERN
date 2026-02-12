import express from "express";
const router = express.Router();

router.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

router.get("/hello", (req, res) => {
    res.json({ message: "Hello from backend" });
});

router.post("/data", (req, res) => {
    res.json({received: true});
});

router.post("/user",(req, res) => {
    const {name,role} = req.body;

    if(!name || !role) {
        return res.status(400).json({
            error: "name and role are required"
        });
    }

    res.status(201).json({
        message: "user received",
        user: {name, role}
    });
});

export default router;