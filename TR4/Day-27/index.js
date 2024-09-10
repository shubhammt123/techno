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

app.get("/getUsers",(req,res)=>{
    res.send({message : "User Fetched" , users : users})
});

app.post("/createUser",(req,res)=>{
    const data = req.body;
    users.push(data);
    res.send({message : "User Created" , data : data});
});

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});