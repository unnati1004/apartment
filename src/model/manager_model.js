const mongoose = require("mongoose");

const manager_schema = mongoose.Schema({
    email :{type:String,required:true,unique:true},
    password:{type:String,require:true}
})

module.exports = mongoose.model("user",manager_schema);



