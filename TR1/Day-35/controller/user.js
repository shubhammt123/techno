const users = require("../user");
const User = require("../model/user");

exports.getUsers = async (req,res)=>{  // http://localhost:3000/api/user
    try {
        const users = await User.find();
    res.status(200).send({message : "User Fetched" , data : users});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createUser = async (req,res)=>{
    try {
        const { firstName , lastName , email , contactDetails } = req.body;
    const existingUser = await User.findOne({email : email});

    if(existingUser){
        return res.status(400).send({message : "User already exist"});
    }
    const user = new User({ firstName : firstName  ,  lastName : lastName , email : email , contactDetails : contactDetails });
    await user.save();
    res.status(201).send({message : "User Created" , data : user});
    } catch (error) {
        res.status(500).send({error : error});
    }
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