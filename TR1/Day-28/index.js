const express = require("express");
const userRouters = require("./router/user");
const productRoute = require("./router/product");

const app = express();

app.use(express.json());

const users = [
    {
        userName : "shubham",
        email : "shubham@gmail.com",
        contactDetails : "1234567890"
    }
]

const middleWare1 = (req,res,next)=>{
    console.log("Midddleware 1 callled");
    // res.send({message : "Unauthorized"});
    next();
}

const middleWare2 = (req,res,next)=>{
    console.log("Middleware 2 called");
    next();
}

app.use(middleWare1);

app.use("/api",userRouters);  //http://localhost:3000/api/
app.use("/products",productRoute);



// MVC -- Model , view , controller


app.listen(3000,()=>{
    console.log("Server is running on 3000");
})