const express = require("express");
const users = require("../user");

const router = express.Router();

router.get("/user",(req,res)=>{  // http://localhost:3000/api/user
    res.status(200).send({message : "User Fetched" , data : users});

});

router.post("/user",(req,res)=>{
    const data = req.body;
    const modifiedData = {id : users.length+1 , ...data};
    users.push(modifiedData);
    res.status(201).send({message : "User Created" , data : data});
});

router.put("/user/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find(item=>item.id === +id);
    if(!user){
        return res.status(404).send({message :  "user not found"});
    }
    user.contactDetails = req.body.contactDetails;
    res.status(202).send({message : "User updated"});
});

router.delete("/user/:id",(req,res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex(item=>item.id===+id);
    if(userIndex === -1 ){
        return res.status(401).send({message : "User not found"});
    }
    const deletedUser = users.splice(userIndex , 1);
    res.status(200).send({message : "User Deleted" , data : deletedUser});
});

module.exports = router;