const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : { type : String , required : true },
    lastName : {type : String },
    email : {type : String , required : true , unique : true},
    address :   {type : String },
    gender : {type :  String}
});

module.exports = mongoose.model("User" , userSchema);