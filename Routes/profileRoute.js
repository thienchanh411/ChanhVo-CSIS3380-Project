const express = require("express");
const mongoose = require('mongoose');
const User = require("../models/UserModel.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express.Router();

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB";

app.get("/:id", async (req, res) => {

    try {

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
        await mongoose.connect(urlMongoDB);
        User.findById(
            { _id: _id },
            (err, user) => {
                if (err) {
                    console.log("Error when find user by ID, after connect DB");
                } else {
                    if (!user) {
                        console.log("No match user found");
                        res.send("No match user found")
                    } else {
                        // console.log("Found user match with ID", user);
                        res.send(user);
                    }

                    mongoose.connection.close();
                }
            }
        )

    } catch (err) {
        console.log("Error when get user profile", err);
    }
})

app.get("/viewuser/:id", async (req, res) => {

    try {

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
        await mongoose.connect(urlMongoDB);
        User.findById(
            { _id: _id },
            (err, user) => {
                if (err) {
                    console.log("Error when find user by ID, after connect DB");
                } else {
                    if (!user) {
                        res.send("No match user found")
                    } else {
                        res.send(`${user.firstname} ${user.lastname}`);
                    }
                    mongoose.connection.close();
                }
            }
        )
    } catch (err) {
        console.log("Error when get user profile", err);
    }
})


app.put("/:id", async (req, res) => {
    const { firstname, lastname, email, phone, street, city, province,
        postcode, password, retypepassword } = req.body;
    console.log("From profile route", firstname, lastname, email, phone, street, city, province,
        postcode, password, retypepassword)

    async function generateHash(password) {
        return bcrypt.hash(password, 12);
    }

    let _id = req.params.id;
    if (password !== retypepassword) {
        return res.send("Retype password does not match");
    }
    _id = mongoose.Types.ObjectId(_id);
    try {
        await mongoose.connect(urlMongoDB);
        generateHash(password)
            .then((hash) => {

                const newUser = {
                    firstname, lastname, email, phone, street, city, province,
                    postcode, password: hash
                }

                console.log("Password hash: ", newUser)
                User.updateOne(
                    { _id: _id },
                    {
                        firstname, lastname, email, phone, street, city, province,
                        postcode, password:hash
                    },
                    (err, msg) => {
                        if (err) {
                            console.log("Error when update profile, after connect DB", err);
                        } else {
                            if (msg.modifiedCount == 0) {
                                res.send("Your profile is already up to date")
                            } else {
                                res.send(`${msg.modifiedCount}`)
                            }
        
                            mongoose.connection.close();
                        }
                    }
                )
            })
            .catch((error) => {
                // return next(error);
            });
        

    } catch (err) {
        console.log("Error when put to update profile", err)
    }
})

module.exports = app;