const mongoose = require('mongoose');
const Request = require('../models/RequestModel.js');

const express = require('express');
const app = express.Router();

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB";

// GET ALL REQUESTS FOR ADMIN

app.get("/", async (req, res) => {
    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connnected to DB from get All Requests");
        Request.find((err, results) => {
            if(err){
                console.log("Error when get all request, after connected DB",err);
            }else{
                console.log("Get information successfull");
                res.send(results);
                mongoose.connection.close();
            }
        })
    }catch(err){
        console.log("Errer form get all request API", err)
    }
});

// OWNER CHECK REQUESTS TO THEIR PETS

app.get("/toowner/:userId", async (req, res) => {
    const ownerId = req.params.userId;
    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connnected to DB from get All Requests");

        // IF WE SEND RESPONSE IN HERE WE WILL GOT THE ERROR WHEN WE SEND THE RESULT IN BELOW
        // res.send("Connected to DB")
        Request.find({ownerId: {$eq : ownerId}},(err, requests) => {
            if(err){
                console.log("Error when get all request, after connected DB",err);
            }else{
                console.log("Get information successfull");
                res.send(requests);
                mongoose.connection.close();
            }
        })
    }catch(err){
        console.log("Errer form get all request API", err)
    }
});

// GET ALL REQUESTS FOR SENDER

app.get("/touser/:userId", async (req, res) => {
    const userId = req.params.userId;
    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connnected to DB from get All Requests");
        Request.find({senderId: {$eq : userId}},(err, requests) => {
            if(err){
                console.log("Error when get all request, after connected DB",err);
            }else{
                console.log("Get information successfull");
                res.send(requests);
                mongoose.connection.close();
            }
        })
    }catch(err){
        console.log("Errer form get all request API", err)
    }
});

app.post("/:userID", async (req, res) => {

    const userID = req.params.userID;
    const status = "Pending";

    const { petId, ownerId, requestTime} = req.body;

    try{
        const newRequest = new Request({
            senderId: userID,
            ownerId : ownerId, 
            petId : petId, 
            requestTime : requestTime,
            status: status
            
        });
    await mongoose.connect(urlMongoDB);
    console.log("Connected to DB when post new request")
    newRequest.save((err) => {
        if(err){
            console.log("Error ", err)
            res.send("Error after connect to DB");
        }else{
            console.log("Add new request successful")
            res.send("Add new request successful" );
            mongoose.connection.close();
        }
    })
    
    }catch (err) {
        console.log("Error when post request", err);
    }
})

// UPDATE ACCEPT REQUEST 

app.put("/byowner/:id", async (req, res) => {
    const {petId, ownerId, senderId, requestTime, responseTime, status} = req.body;

    try{
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(urlMongoDB);
        console.log("Connected to DB when update request");
        Request.updateOne(
            {_id: _id},
            {petId, ownerId, senderId, requestTime, responseTime, status},
            (err, msg) => {
                if(err) {
                    console.log("Error when update request, after connect to DB", err);

                }else{
                    if(msg.modifiedCount === 0){
                        res.send("No match request found")
                    }else{
                        res.send(`Update successfully ${msg.modifiedCount}`);
                    }
                }
            }
        )

    }catch(err) {
        console.log("Error when Update request", err)
    }
})

module.exports = app;


