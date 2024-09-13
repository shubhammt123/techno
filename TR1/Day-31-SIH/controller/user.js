const users = require("../user");

exports.getUsers = (req,res)=>{  // http://localhost:3000/api/user
    res.status(200).send({message : "User Fetched" , data : users});

};

exports.createUser = (req,res)=>{
    const data = req.body;
    const modifiedData = {id : users.length+1 , ...data};
    users.push(modifiedData);
    res.status(201).send({message : "User Created" , data : data});
};

exports.updateUser = (req,res)=>{
    const id = req.params.id;
    const user = users.find(item=>item.id === +id);
    if(!user){
        return res.status(404).send({message :  "user not found"});
    }
    user.contactDetails = req.body.contactDetails;
    res.status(202).send({message : "User updated"});
};

exports.deleteUser = (req,res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex(item=>item.id===+id);
    if(userIndex === -1 ){
        return res.status(401).send({message : "User not found"});
    }
    const deletedUser = users.splice(userIndex , 1);
    res.status(200).send({message : "User Deleted" , data : deletedUser});
};

// index.js >> router >> controller >> Model