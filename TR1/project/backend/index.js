const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/user");
const connectDb = require("./config/db");
const gloablErrorHandler = require("./middleware/globalErrorHandler");

const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.use("/auth" , userRoutes);


app.use(gloablErrorHandler);


app.listen(5000,()=>{
    console.log("Server is running on 5000");
});