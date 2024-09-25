const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req,res , next)=>{
    try {
        const { name , email , password , phoneNumber , role } = req.body;
        const existingUser = await User.findOne({email : email});

        if(existingUser){
            const error = new Error("User Already exist");
            error.name = "UserExist";
            error.statusCode = 400;
            throw next(error);
        };

        // const hashedPassword = await bcrypt.hash(password , 12);

        const newUser = new User({
            name : name , 
            email : email,
            password : password,
            phoneNumber : phoneNumber,
            role
        });

        await newUser.save();
        res.status(201).send({message : "User created" , data : newUser});
        
    } catch (err) {
        next(err);
    }
};

exports.login = async (req,res , next)=>{
    try {
        const { email , password } = req.body;
        const isExitingUser = await User.findOne({email : email});
        if(!isExitingUser){
            const error = new Error("User not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw next(error);
        };

        const isMatched = await bcrypt.compare(password , isExitingUser.password);
        if(!isMatched) { 
            const error = new Error("Unauthorized");
            error.name = "UnAuthorized";
            error.statusCode = 401;
            throw next(error);
        }

        const token = jwt.sign({id : isExitingUser._id,email : isExitingUser.email , role : isExitingUser.role} , process.env.JWT_SECRET , {expiresIn : "1h"})
        res.status(200).send({message : "User Logged-In" , data : isExitingUser ,token : token});
    } catch (error) {
        next(error);
    }
}


exports.getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find({role : "User"});
        res.status(200).send({message : "User Fetched" , data : users});
    } catch (error) {
        next(error);
    }
}

exports.updateUser = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const isExisting = await User.findById(id);
        if(!isExisting){
            const error = new Error("User not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }

        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new : true});
        res.status(202).send({message :  "User updated" , data : updatedUser});
    } catch (error) {
        next(error);
    }
}