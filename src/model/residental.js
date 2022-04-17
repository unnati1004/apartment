const mongoose = require("mongoose");

const residental_schema = mongoose.Schema({
    Name:{type:String,require:true},
    Gender:{type:String,require:true},
    Age:{type:Number,require:true}
})

module.exports = mongoose.model("residental",residental_schema);