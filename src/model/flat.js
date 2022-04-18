const mongoose = require("mongoose");

const Flat_schema =new mongoose.Schema({
Type:{type:String,enum:["Owner","Tenant"],required:true},
Block:{type:String,required:true},
Number:{type:Number,required:true},
manager_id:{type:mongoose.Schema.Types.ObjectId},
residental_id:[{type:mongoose.Schema.Types.ObjectId,ref:"residental"}],
})

module.exports = mongoose.model("Flat",Flat_schema);