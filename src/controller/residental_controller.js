const express = require("express");
const residental_schema = require("../model/residental");
const flat = require("../model/flat");
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

   router.post("/:residental_id",async(req,res)=>{
       try {
           const resident = await residental_schema.create(req.body);
            // const {flat} = await flat.findById(req.params.flat)

       } catch (error) {
           return res.send(error);
       }
   })



 module.exports = router;