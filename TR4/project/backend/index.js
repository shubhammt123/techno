const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/user");
const connectDb = require("./config/db");
const gloablErrorHandler = require("./middleware/globalErrorHandler");
const authRoutes = require("./router/auth");
const productRoutes = require("./router/product");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
require("dotenv").config();
require("./config/passport");

const app = express();

app.use(session({
    secret : "Your_Secret_Key",
    resave : false,
    saveUninitialized : false,
    cookie : {secure : false}
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

connectDb();

app.use("/uploads",express.static(path.join(__dirname , "uploads")))

app.use("/auth" , userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api",productRoutes);


app.use(gloablErrorHandler);


app.listen(5000,()=>{
    console.log("Server is running on 5000");
});