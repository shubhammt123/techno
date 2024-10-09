const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb+srv://shubham1998:0RTclkde5KA94PeN@mymongodb.jy0ll84.mongodb.net/technoprojectTr1");
        console.log("Database is connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;