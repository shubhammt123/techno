const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.signup = async (req,res , next)=>{
    try {
        const { name , email , password , phoneNumber } = req.body;
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
            phoneNumber : phoneNumber
        });

        await newUser.save();
        res.status(201).send({message : "User created"});
        
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

        res.status(200).send({message : "User Logged-In" , data : isExitingUser});
    } catch (error) {
        next(error);
    }
}


