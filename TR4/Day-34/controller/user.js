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

exports.createUser = async (req,res)=>{
    try {
        const { firstName , lastName , email , address , gender  } = req.body;
        const existingUser = await User.findOne({email : email});
        if(existingUser){
           return res.status(400).send({message : "User already exist"});
        }
    const user = new User({ firstName :  firstName , lastName : lastName , email : email , address : address , gender : gender });
    await user.save();
    res.status(201).send({message : "User Created" ,  data : user});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req,res)=>{ 
    try {
        const { id } = req.params;
        const existingUser = await User.findById(id);
        if(!existingUser){
            return res.status(404).send({message : "User not found"});
        }
        const updateUser = await User.findByIdAndUpdate(id , req.body , {new : true});
        res.status(202).send({message : "User Updated" , data : updateUser});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteUser = async (req,res)=>{
    try {
        const { id } = req.params;
        const existingUser = await User.findById(id);
        if(!existingUser){
            return res.status(404).send({message : "User not found"});
        }
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).send({message : "User Deleted" , data : deletedUser});
    } catch (error) {
        res.status(500).send(error);
    }
};