const express = require("express");
const residental_schema = require("../model/residental");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const item = await residental_schema.create();
        res.send(item)
    }
    catch(err)
    {
        res.send(500).send({message:err.message})
    }
})  

 router.get("",async(req,res)=>{
     try{
        const item = await residental_schema.find().lean().exec();
        res.send(item);
     }
     catch(err){
         res.status(500).send({message:err.message})
     }
 })

 module.exports = router;