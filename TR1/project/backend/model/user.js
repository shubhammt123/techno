const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 charater long"],
        maxlength: [50, "Name cannot exceed 50 charater"],
        validate: {
            validator: function (value) {
                return validator.isAlpha(value, "en-US");
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
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 charater long"],
        maxlength: [128, "Password cannot exceed 128 charaters"],
        validate: {
            validator: function (value) {
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
        required: [true, "Phone Number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN")
            },
            message: "Please Enter a valid Phone number"
        }
    }
});


userSchema.pre("save", async function (next) {
    try {
        const user = this;
        if (!user.isModified("password")) return next();
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})


module.exports = mongoose.model("User", userSchema);