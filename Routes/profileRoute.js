const express = require("express");
const mongoose = require('mongoose');
const User = require("../models/UserModel.js");

const app = express.Router();

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB";

app.get("/:id", async(req, res) => {

    // const {firstname, lastname,email, phone, street, city, provice, postcode, password} = req.body;
    
    try{

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
        await mongoose.connect(urlMongoDB);
        User.findById(
            {_id : _id},
            (err, user) => {
                if(err){
                    console.log("Error when find user by ID, after connect DB");
                }else{
                    if(!user){
                        console.log("No match user found");
                        res.send("No match user found")
                    }else {
                        // console.log("Found user match with ID", user);
                        res.send(user);
                    }
                  
                    mongoose.connection.close();
                }
            }
        )
    
    }catch(err){
        console.log("Error when get user profile", err);
    }
})

app.put("/:id", async (req, res) => {
    const {firstname, lastname,email, phone, street, city, province, 
        postcode, password, retypepassword} = req.body;
        console.log("From profile route",firstname, lastname,email, phone, street, city, province, 
            postcode, password, retypepassword)
    let _id = req.params.id;
    if(password !== retypepassword) {
        return res.send("Retype password does not match");
    }
    _id = mongoose.Types.ObjectId(_id);
    try{
        await mongoose.connect(urlMongoDB);
        User.updateOne(
            {_id : _id},
            {firstname, lastname,email, phone, street, city, province, 
                postcode, password, retypepassword},
            (err, msg) => {
                if(err){
                    console.log("Error when update profile, after connect DB", err);
                }else{
                    if(msg.modifiedCount == 0){
                        res.send("Your profile is already up to date")
                    }else{
                        res.send(`${msg.modifiedCount}`)
                    }
                    
                    mongoose.connection.close();
                }
            }
        )

    }catch(err){
        console.log("Error when put to update profile", err)
    }
})

module.exports = app;