const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello From home api")
});

app.post("/createUser",(req,res)=>{  // http://localhost:3000/createUser
    const data = req.body;
    console.log(data);
    res.send({message : "User Created" , user : data});
});


app.listen(3000,()=>{
    console.log("Server is running on 3000");
})