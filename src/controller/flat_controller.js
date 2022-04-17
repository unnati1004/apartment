const express = require("express");
const Flat_schema = require("../model/flat");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const item = await Flat_schema.create(req.body)
        res.send(item)
    }
    catch(err)
    {
        res.send(500).send({message:err.message})
    }
})  

 router.get("",async(req,res)=>{
     try{
        const item = await Flat_schema.find().populate({path:"residental_id",select:["name","age","gender"]}).lean().exec();
        res.send(item);
     }
     catch(err){
         res.status(500).send({message:err.message})
     }
 })

 module.exports = router;