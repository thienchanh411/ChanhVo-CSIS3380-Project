const express = require('express');

const mongoose = require('mongoose');
const app = express.Router();

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB";
const Pet = require("../models/PetModel.js");

// USE MULTER FOR UPLOAD FILE
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, "./public/data/uploads/");
    },
    filename: function (request, file, callback) {
        fileName=file.originalname;
        callback(null, file.originalname);
    }
  });

const imageUpload = multer({storage : storage})

// var imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//       fileSize: 40000000 // 42000000 Bytes around 40 MB
//     },
//     fileFilter(req, file, callback) {
//       if (!file.originalname.match(/\.(png|jpg)$/)) { 
//          // upload only png and jpg format
//          return cb(new Error('Please upload a Image'))
//        }
//      callback(undefined, true)
//   }
// })

// Get ALL request for pet
app.get("/", async (req, res) => {

    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connected to DB from get pet api");
        Pet.find((err, pets) => {
            if(err) console.log("Error when get all pets, after connecting DB", err);
            else {
                console.log("Get information successfull");
                res.send(pets);
                mongoose.connection.close();
            }
        })
        
    }catch(err){
        console.log("Error when get all pet", err);
    }
})

// GET PETS BY OWNERID
app.get("/toowner/:ownerId", async(req, res) => {
    let ownerId = req.params.ownerId;
    try{
        
        await mongoose.connect(urlMongoDB);
        console.log("Connected to DB when get pet by owner ID");

        // if only need ownerId 
        //Pet.find({ownerId: {$eq : ownerId}}, (err, pets) => {})

        Pet.find({$and: [{ownerId: {$eq : ownerId}} , {status: {$ne: "InActive"}} ]}, (err, pets) => {
            if(err) console.log("Error when get pet after connect to DB", err);
            else{
                console.log("get pets successful", pets);
                res.send(pets);
                mongoose.connection.close()
            }
        })

    }catch(err){
        console.log("Error when get pets by ownerId", err)
    }
})

// USER SEARCH LIST OF PETS/ NOT BELONG TO THEM
app.get("/touser/:userid", async(req, res) => {
    try{
        let userid = req.params.userid;
        await mongoose.connect(urlMongoDB);
        console.log("Connected to DB when get pet by user ID");

        // if only need ownerId 
        //Pet.find({ownerId: {$eq : ownerId}}, (err, pets) => {})

        Pet.find({$and: [{ownerId: {$ne : userid}} , 
                    {$or: [{status: {$eq: "Active"}},  
                    // {status: {$ne: "Adopted"}}
                ]}]}, (err, pets) => {
            if(err) console.log("Error when get pet after connect to DB", err);
            else{
                // console.log("get pets successful", pets);
                res.send(pets);
                mongoose.connection.close()
            }
        })

    }catch(err){
        console.log("Error when get pets by ownerId", err)
    }
})

// CREATE A NEW PET
app.post("/", async (req, res) => {
    const {petName, ownerId, petType, breed, isSpayed, rehomeReason, gender, age, size, color,
    description, image, diet, status} = req.body

    // console.log(image.replace("C:\\fakepath\\", ""))
    console.log(image)

    console.log(petName, ownerId, petType, breed, isSpayed, rehomeReason, gender, age, size, color,
        description, image,diet, status);
        // description, image.replace("C:\\fakepath\\", ""),diet, status);
    
    try{
       
        const newPet = new Pet({
            petName, 
            ownerId,
            petType,
            breed, 
            isSpayed,
            rehomeReason, 
            gender, 
            age, 
            size, 
            color,
            image, 
            description, 
            diet, 
            status
            
        });

        await mongoose.connect(urlMongoDB);
        console.log("Connnected from post Pet API");
        newPet.save(err => {
            if(err){
                console.log("Error when post a new pet", err);
                res.send("Error when post a new pet");
            } 
            else {
                console.log("Added new user successfully")
                res.send(newPet);
                mongoose.connection.close();
            }
        })

    }catch (err) {
        console.log("Error from post API pet", err);
    }
})

// UPDATE PET INFORMATION

app.put("/update/:id", async(req, res) => {
    const {ownerId, petName, petType, gender, breed, age, size, isSpayed, color, image, description, 
        diet,rehomeReason, status} = req.body;
        console.log(ownerId,petName, petType, breed, isSpayed, rehomeReason, gender, age, size, image, color,
            description, diet, status)
    try{

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id.trim());

        await mongoose.connect(urlMongoDB);
        console.log("Connected to DB in put pet request API");
        Pet.updateOne(
            {_id : _id},
            {ownerId, petName, petType, breed, isSpayed, rehomeReason, gender, age, size, image, color,
                description, diet, status},
            (err, msg) => {
                if(err) {
                    console.log("Error after connect DB, to update pet", err);
                    res.send("No match pet found");
                }else{
                    if(msg.modifiedCount === 0){
                        res.send("No match pet found");
                        console.log("No match found, after connect to DB, for pet update");
                    }else{
                        console.log(`Successfully updated ${msg.modifiedCount} document`);
                        res.send(`${msg.modifiedCount}`);
                    }
                    mongoose.connection.close();
                }
            }
        )

    }catch (err) {
        console.log("Error when edit pet in API: ", err)
    }
})

// DELETE PET BY SET STATUS: INACTIVE

app.patch("/delete/:id", async (req, res) => {
    try{

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        const status = "InActive";
       
        await mongoose.connect(urlMongoDB);
        console.log("Connect to DB when delete pet")
        Pet.updateOne(
            {_id : _id},
            {status},
            (err, msg) => {
                if(err){
                    console.log("Error after connecting to DB when delete pet", err);
                    res.send("Error after connecting to DB when delete pet")
                } else{
                    if(msg.modifiedCount === 0){
                        console.log("No match result found");
                        res.send("No match result found")
                    }else {
                        console.log(`Update successfull ${msg.modifiedCount} record`);
                        res.send(`${msg.modifiedCount}`)
                    }
                    mongoose.connection.close()
                }
            }
        )

    }catch(err) {
        console.log("Error when delete pet", err)
    }
})

// UPDATE PET IS ADOPTED
app.patch("/adopted/:id", async (req, res) => {
    try{

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        const status = "Adopted";
       
        await mongoose.connect(urlMongoDB);
        console.log("Connect to DB when delete pet")
        Pet.updateOne(
            {_id : _id},
            {status},
            (err, msg) => {
                if(err){
                    console.log("Error after connecting to DB when delete pet", err);
                    res.send("Error after connecting to DB when delete pet")
                } else{
                    if(msg.modifiedCount === 0){
                        console.log("No match result found");
                        res.send("No match result found")
                    }else {
                        console.log(`Update successfull ${msg.modifiedCount} record`);
                        res.send(`${msg.modifiedCount}`)
                    }
                    mongoose.connection.close()
                }
            }
        )

    }catch(err) {
        console.log("Error when delete pet", err)
    }
})

module.exports = app;