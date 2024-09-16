const users = require("../user");
const User = require("../model/user");

exports.getUser = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send({message : "User Fetched" , data : users});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createUser = (req,res)=>{
    
    const data = req.body;
    const modifiedData = {id : users.length+1 , ...data};
    users.push(modifiedData);
    res.send({message : "User  Created" , data : data});
};

exports.updateUser = (req,res)=>{ 
    const { id } = req.params;

    let user = users.find(item=>item.id === +id);
    if(!user){
        return res.send({message : "User not found"})
    }
    user.contactDetails = req.body.contactDetails
    res.send({message : "User Updated"})
};

exports.deleteUser = (req,res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex(item => item.id === +id);
    if(userIndex === -1){
        return res.send({message : "User not found"});
    }
    const user = users.splice(userIndex , 1);
    res.send({message : "User Deleted" , data : user});
};