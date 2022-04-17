const express = require("express");
const manager_schema = require("../model/manager_model");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const item = await manager_schema.create(req.body);
        res.send(item)
    }
    catch(err)
    {
        res.send(500).send({message:err.message})
    }
})  

 router.get("",async(req,res)=>{
     try{
        const item = await manager_schema.find().lean().exec();
        res.send(item);
     }
     catch(err){
         res.status(500).send({message:err.message})
     }
 })

 module.exports = router;