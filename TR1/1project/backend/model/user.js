const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    googleId :  {
        type : String,
        default : null
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 charater long"],
        maxlength: [50, "Name cannot exceed 50 charater"],
        validate: {
            validator: function (value) {
                return validator.isAlpha(value, "en-US",{ignore : " "});
            },
            message: "Name should be in string"
        }
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Please Enter a valid email address"
        }
    },
    password: {
        type: String,
        required: function(){
            return !this.googleId
        },
        maxlength: [128, "Password cannot exceed 128 charaters"],
        validate: {
            validator: function (value) {
                if(this.googleId) return true
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                })
            },
            message: "Password must be stronger"
        }
    },
    phoneNumber: {
        type: String,
        required: function(){
            return !this.googleId
        },
        validate: {
            validator: function (value) {
                if(this.googleId) return true
                return validator.isMobilePhone(value, "en-IN")
            },
            message: "Please Enter a valid Phone number"
        }
    },
    role : {
        type : String,
        required : [true , "Role is required"],
        enum : ["User","Admin"],
        default : "User",
    },
    status : {
        type : Boolean,
        required  : [true , "Status is required"],
        enum : [true,false],
        default : true
    }
});


userSchema.pre("save", async function (next) {
    try {
        const user = this;
        if (!user.isModified("password") || user.googleId) return next();
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})


module.exports = mongoose.model("User", userSchema);