require("dotenv").config({path: "./.env"});
const express = require("express");
const app = express();
// const dotenv = require("dotenv")
// dotenv.config({path: "./.env"});


// const PORT = process.env.PORT;

console.log("hello")

app.listen(process.env.PORT, ()=>{
    console.log(`the server is running on the port ${process.env.PORT}`)
});