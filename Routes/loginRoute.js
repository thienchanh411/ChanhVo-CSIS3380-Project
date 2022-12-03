const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express.Router();

///////////WE STILL NEED DECLARE THE URL AND MODEL BEFORE USE IT//////////

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB"
const User = require("../models/UserModel.js");

app.get("/", (req, res) => {
    res.send("This is login Page");
})

app.post("/", async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connected to MongoBD at login post");

        User.findOne(
            {email: email},
            (err,user)=>{
                if(err) console.log("ERROR: ", err); 
                else{
                    if(user===null){
                        res.send("Invalid Email or password")
                    }else{
                        // console.log("Found", user)// Return null if cannot find the match user
                    (user.password === password) ? res.send("Login successfully")
                    : res.send("Invalid Email or password")
                    }
                    
                }  
            }
        )

    }catch (err){
        console.log ("Error when Post in Login route", err);
    }
    
})

module.exports = app;