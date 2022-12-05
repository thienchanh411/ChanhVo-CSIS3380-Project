const express = require('express');
const app = express.Router();
const mongoose = require("mongoose");
const User = require("../models/UserModel.js");

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB";

// CHECK IF EMAIL ALREADY EXIST

app.get("/:email", async (req, res) => {
    const email = req.params.email;
    // const _id = req.params.id;
    // _id = mongoose.Types.ObjectId(_id);
   try{
    await mongoose.connect(urlMongoDB);
    console.log("Connected to MongoBD at login get user email");

    User.findOne(
        {email: email},
        (err,user)=>{
            if(err) console.log("ERROR: ", err); 
            else{
                if(user===null){
                    console.log(user);
                    res.send("Appropriate email")
                }else{
                    console.log(user);
                     res.send("Existing email")
               
                }
                mongoose.connection.close();
            }  
        }
    )

   }catch(err){
    console.log("Error when get user by email", err);
   }
})

app.post("/", async (req, res) =>  {

    const {email, password, firstname, lastname, phone, street, city, province, postcode} = req.body;
    const status = true;
    console.log(email, password, firstname, lastname, phone, street, city,province, postcode)
    
    let validEmail = "";

    try{
        
        await mongoose.connect(urlMongoDB);
        console.log("Connected to MongoDB");
  
        console.log("Approproate email")
            const user1 = new User({
                email,
                password,
                firstname ,
                lastname ,
                phone,
                street,
                city,
                province,
                postcode,
                status,
            });
            await mongoose.connect(urlMongoDB);
            user1.save(err=> {
            if(err) {
                console.log("Error when Post request", err);
                res.send("Error when add new user")
            }else {
                console.log("Added new user successfully")
                res.send(user1);
                mongoose.connection.close();
            }
        })

    }catch (error) {
        console.log("Error when post in api/register ", error)
    }

})

module.exports = app;