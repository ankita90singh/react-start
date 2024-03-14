const express = require("express");
const router = express.Router();

//router.get 
// /api/user
router.get("/",(req,res,next)=>{
    res.status(200).json({
        success: true, message: "this is the test  route"
    })
})



router.post("/create",(req,res,next)=>{
    res.status(201).json({success: true, user: req.body});
});

module.exports= router;