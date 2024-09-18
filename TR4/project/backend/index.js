const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const authRoutes = require("./router/user");
 
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth" , authRoutes);

connectDb();

app.listen(5000,()=>{
    console.log("Server is running on 5000");
});