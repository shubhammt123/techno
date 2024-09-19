const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const authRoutes = require("./router/user");
const errorHandler = require("./middleware/globalErrorHandler");
 
const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.use("/auth" , authRoutes);

app.use(errorHandler);

app.listen(5000,()=>{
    console.log("Server is running on 5000");
});