const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/technoEcom");
        console.log("Database is connected");
    } catch (error) {
        console.log("Error connecting database", error);
    }
    
};

module.exports = connectDb;