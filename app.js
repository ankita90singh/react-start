require("dotenv").config({path: "./.env"});
const express = require("express");
const app = express();


require("./models/dbconfig").dbconnection()

console.log("hello")

app.listen(process.env.PORT, ()=>{
    console.log(`the server is running on the port ${process.env.PORT}`)
});