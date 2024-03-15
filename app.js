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

// ye unsabhi route ke liye kaam karta h jo abhi tak bane hi nahi h

// jab upr kuchh nahi milega tab jump karke app.all pe aayega
app.all("*",(req,res,next)=>{
    res.status(404).json({
        success: false,
        message: `${req.url} route not found`
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`the server is running on the port ${process.env.PORT}`)
});