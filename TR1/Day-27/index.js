const express = require("express");

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

app.get("/",(req,res)=>{
    res.send({message : "User fetched", users : users});
});

app.post("/createUser",middleWare2,(req,res)=>{  // http://localhost:3000/createUser

    const data = req.body;
    console.log(data);
    users.push(data);
    res.send({message : "User created",user : data});
});

app.put("/updateUser",(req,res)=>{

})


app.listen(3000,()=>{
    console.log("Server is running on 3000");
})