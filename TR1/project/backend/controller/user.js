const User = require("../model/user");

exports.signup = async (req,res)=>{
    try {
        const { name , email , password , phoneNumber } = req.body;
        const existingUser = await User.findOne({email : email});

        if(existingUser){
            return res.status(400).send({message : "User Already exist"});
        }

        const newUser = new User({
            name : name , 
            email : email,
            password : password,
            phoneNumber : phoneNumber
        });

        await newUser.save();
        res.status(201).send({message : "User created"});
        
    } catch (err) {
        console.log(err.name)
        if(err.name === "ValidationError"){
            const errors = Object.values(err.errors).map(error => error.message);
            return res.status(400).json({
                message : "Validation error",
                error : errors
            })
        }
        res.status(500).send(err);
    }
};

exports.login = async (req,res)=>{
    try {
        const { email , password } = req.body;
        const isExitingUser = await User.findOne({email : email});
        if(!isExitingUser){
            return res.status(404).send({message : "User not found"});
        };

        const isMatched = password === isExitingUser.password;
        if(!isMatched) { 
            return res.status(401).send({message : "Invalid Password"});
        }

        res.status(200).send({message : "User Logged-In" , data : isExitingUser});
    } catch (error) {
        res.status(500).send(error);
    }
}


