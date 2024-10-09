const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    userId : {type : String , required : true},
    customerName : {type : String , required : true},
    customerContactNumber  : {type : String , required : true},
    address : {type : String , required : true},
    pinCode : {type  :  Number , require  : true},
    product : [{
    name : {type : String , required : true},
    price : {type : Number,    required : true},
    description : {type : String , required : true},
    category : {type : String , required : true},
    productUrl : {type : String , required : true},
    quantity  : {type : Number , required : true , default : 1}
    }],
    transactionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order",productSchema);