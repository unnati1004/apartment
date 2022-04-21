const express = require("express");
const residental_schema = require("../model/residental");
const flat = require("../model/flat");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const item = await residental_schema.create(
           { Name: req.body.Name,
            Gender: req.body.Gender,
            Age: req.body.Age,
        }
        );
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
 });

 router.post("/:flats_ID",async(req,res)=>{
    try {
        const resident = await residental_schema.create(req.body);
        const {residental_id} = await flat.findById(req.params.flats_ID)
        residental_id.push(resident._id);
             await flat.findByIdAndUpdate(req.params.flats_ID,{residental_id});
                    return res.send(resident);
    } catch (error) {
        return res.send(error);
    }
});
  

   


 module.exports = router;