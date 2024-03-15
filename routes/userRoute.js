const express = require("express");
const { create } = require("../models/userModel");
const { createuser } = require("../controlles/userController");
const router = express.Router();
// const user = require("../models/userModel")
//router.get 
const {home, createUser} = require("../controlles/userController")


router.get("/",home)



router.post("/create",createUser);

module.exports= router;