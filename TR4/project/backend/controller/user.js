const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req,res , next)=>{
    try {
        const { name , email , password , phoneNumber , role } = req.body;
        const isExisting = await User.findOne({email : email});
        if(isExisting){
            const error = new Error("User already exist")
            error.name = "ExistingUserError";
            error.statusCode = 400;
            throw error;
        };

        // const hashedPassword = await bcrypt.hash(password , 10);
        const newUser = new User({name : name , email : email , password : password , phoneNumber  : phoneNumber , role});
        console.log("hello");
        await newUser.save();
        res.status(201).send({message : "Account created" , data : newUser});
    } catch (error) {
        next(error);
    }
};


exports.login = async (req,res,next)=>{
    try {
        const { email , password } = req.body;
        const isExisting = await User.findOne({email : email});

        if(!isExisting){
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        };

        const isMatched = await bcrypt.compare(password , isExisting.password);

        if(!isMatched){
            const error = new Error("Invalid Password");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({id : isExisting._id , email : isExisting.email ,  role :  isExisting.role},process.env.JWT_SECRET,{expiresIn : "1h"});
        res.status(200).send({message : "User Logged-In" , data : isExisting  ,  token : token});
 
    } catch (error) {
        next(error);
    }
}
