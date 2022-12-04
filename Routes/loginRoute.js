const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express.Router();

///////////WE STILL NEED DECLARE THE URL AND MODEL BEFORE USE IT//////////

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB"
const User = require("../models/UserModel.js");

app.get("/", async (req, res) => {
    const _id = "63884360cb0ab432dc54dc00";
    // const _id = req.params.id;
    // _id = mongoose.Types.ObjectId(_id);
   try{
    await mongoose.connect(urlMongoDB);
    console.log("Connected to MongoBD at login get user ID");

    User.findOne(
        {_id: _id},
        (err,user)=>{
            if(err) console.log("ERROR: ", err); 
            else{
                if(user===null){
                    res.send("No match user found")
                }else{
                     res.send(user)
               
                }
                mongoose.connection.close();
            }  
        }
    )

   }catch(err){
    console.log("Error when get user by Id", err);
   }
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
                    (user.password === password) ? res.send(user._id)
                    : res.send("Invalid Email or password");
                    }
                    mongoose.connection.close();
                }  
            }
        )

    }catch (err){
        console.log ("Error when Post in Login route", err);
    }
    
})

module.exports = app;