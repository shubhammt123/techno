const express = require("express");
const users = require("../user");

const router = express.Router();

router.get("/users",(req,res)=>{  
    res.send({message : "User Fetched" , data : users});
});

router.post("/users",(req,res)=>{ 
    const data = req.body;
    const modifiedData = {id : users.length+1 , ...data};
    users.push(modifiedData);
    res.send({message : "User  Created" , data : data});
});

router.put("/users/:id",(req,res)=>{ 
    const { id } = req.params;

    let user = users.find(item=>item.id === +id);
    if(!user){
        return res.send({message : "User not found"})
    }
    user.contactDetails = req.body.contactDetails
    res.send({message : "User Updated"})
});

router.delete("/users",(req,res)=>{ 

});

module.exports = router;