require("dotenv").config({path: "./.env"});
const express = require("express");
const app = express();


require("./models/dbconfig").dbconnection()

//routes

const userRouter = require("./routes/userRoute")
//logger
const logger = require("morgan")
app.use(logger("tiny"))

// body parser

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// base route me jaanne ke liye likha h

app.use("/api/user", userRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`the server is running on the port ${process.env.PORT}`)
});