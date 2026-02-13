import express from "express";
const app = express();

import userRoutes from "./routes/userRoutes.js";

const PORT = 5000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});