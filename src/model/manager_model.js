const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const manager_schema = new mongoose.Schema({
    email :{type:String,required:true,unique:true},
    password:{type:String,require:true}
})

manager_schema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
  
    // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
    // salt
    // hashing rounds =>
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  manager_schema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = mongoose.model("user",manager_schema);



