const express = require("express");
const cors = require("cors");
const connect =require("./configs/db");
const flat_controller =require("./controller/flat_controller");
const residental_controller= require("./controller/residental_controller")
const {login,register} = require("./controller/auth.controller");


const app = express();
require("dotenv").config();
app.use(express.json());

const corsOrigin = {
    origin: '*',
    credential:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOrigin));

app.use("/flat",flat_controller);

app.use("/residental",residental_controller);

app.post("/login",login);

app.post("/register",register);

port= process.env.PORT || 3000;

app.listen(port,()=>{
    try{
        connect();
        console.log(`listening to ${port}`);
    }
    catch(e)
    {
        console.error({message:e.message})
    }
})