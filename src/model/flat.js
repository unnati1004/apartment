const mongoose = require("mongoose");

const Flat_schema = mongoose.Schema({
Type:{type:String,require:true},
Block:{type:String,require:true},
Number:{type:Number,require:true},
residental_id:[{type:mongoose.Schema.Types.ObjectId,ref:"residental",require:true}],
})

module.exports = mongoose.model("Flat",Flat_schema);