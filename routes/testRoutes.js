import express from "express";
const router = express.Router();

let users = [];
let currentId = 1;

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

    const newUser = {
        id: currentId++,
        name,
        role
    };

    users.push(newUser);

    res.status(201).json({
        message: "user received",
        user: newUser
    });
});

router.get("/users", (req, res) => {
    res.json(users);
});

router.get("/user/:id", (req,res) => {
    console.log("Route hit");
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if(!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }
    res.json(user);
});
 
export default router;