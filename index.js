import express from "express";
const app = express();

import testRoutes from "./routes/testRoutes.js";

const PORT = 5000;

app.use("/", testRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});