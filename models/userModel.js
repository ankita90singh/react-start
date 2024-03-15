const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    username:{
      type: String,
      trim: true,
      unique:true,
      require:[true, "username is required"],
      minLength: [3, "username must be atleast 3 character"]

      
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        unique: true,
        required: [true, "password is require"],
        minLength: [3 ,"password must contain 3 character"],
        maxLength:[15, "password must contain 3 character number and special symbol"]

    }



}, {timestamps: true})



const user = mongoose.model("user", userModel)


module.exports = user