const mongoose = require("mongoose");

const connect = async()=>{
    return await mongoose.connect("mongodb+srv://unnati:12345@cluster0.ft1wj.mongodb.net/Apartment?retryWrites=true&w=majority")
}
module.exports = connect;