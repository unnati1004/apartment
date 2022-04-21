const express = require("express");
const Flat_schema = require("../model/flat");
const residental_schema = require("../model/residental");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const item = await Flat_schema.create({
            Type:req.body.Type,
            Block:req.body.Block,
            Number:req.body.Number
        })
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

 router.get("/:id",async(req,res)=>{
     try{
        const item = await Flat_schema.findById(req.params.id).populate({path:"residental_id"}).lean().exec();
        // console.log("")
        res.send(item);
     }
     catch(err){
         res.status(500).send({message:err.message})
     }
 })

 
  




 router.get("/:id/:search", async (req, res) => {
    // console.log("req", req.params);
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const flatGet = await Flat.find({
            $and: [{ manager: req.params.id }, { Block: req.params.search }],
        })
            .populate({ path: "manager", select: ["name", "email", "token"] })
            .lean()
            .exec();
        res.send(flatGet);
    } catch (err) {
        res.send(err.message);
    }
});
 

 module.exports = router;