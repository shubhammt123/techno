const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const userRoutes = require("./router/user");
const authRoutes = require("./router/auth");
const errorHandler = require("./middleware/globalErrorHandler");
const passport = require("passport");
const session = require("express-session");
const cookie = require("express-session/session/cookie");
require("dotenv").config();
require("./config/passport");
 
const app = express();

app.use(session({
    secret : "your_secret_key",
    resave : false,
    saveUninitialized :  false,
    cookie : { secure : false }
}));

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
connectDb();

app.use("/auth" , userRoutes);
app.use("/api/auth" , authRoutes);

app.use(errorHandler);

app.listen(5000,()=>{
    console.log("Server is running on 5000");
});