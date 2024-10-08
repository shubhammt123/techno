const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true , "Product Name is required"],
        minlength : [3,"Product name must be atleast 3 letters"]
    },
    price : {
        type : Number,
        required : [true , "Product Price is required"],
        min  : [0,"Price should be grater than 0"]
    },
    description : {
        type : String,
        required : [true , "Product Description is required"],
        minlength : [10 , "Description Should be atleast 10 charaters long"]
    },
    category : {
        type : String,
        required : [true , "Category is required"]
    },
    productUrl : {
        type : String ,
        // validate : {
        //     validator : function(value){
        //         return validator.isURL(value);
        //     },
        //     message : "Please Provide a valid url"
        // },
        required  : [true , "Product Url is required"]
    }
});

module.exports = mongoose.model("Product",productSchema);