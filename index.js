import express from "express";
import mongoose from "mongoose";

const app = express();

import userRoutes from "./routes/userRoutes.js";

const PORT = 5000;

app.use(express.json());
app.use("/", userRoutes);

mongoose.connect("mongodb+srv://arpitampatil27_db_user:Arpita131*@usercluster.qyfszyp.mongodb.net/myDatabase?appName=userCluster")
.then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`server running on port  ${PORT}`);
    });
})
.catch(err => {
    console.error("DB connection error:", err);
})

//mongodb+srv://arpitampatil27_db_user:Arpita131*@usercluster.qyfszyp.mongodb.net/myDatabase?appName=userCluster