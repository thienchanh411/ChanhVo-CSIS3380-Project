const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require("./models/UserModel.js");
const cors = require('cors')

const login = require("./Routes/loginRoute.js");
const pet = require("./Routes/petRoute.js");
const request = require("./Routes/requestRoute");
const profile = require("./Routes/profileRoute.js");
const register = require("./Routes/registerRoute.js");

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

const urlMongoDB = "mongodb://localhost:27017/rehomepetDB"

// mongoose.connect(urlMongoDB);
// console.log("Connected to MongoDB");

app.get("/api/admin/", async (req, res) =>  {

    try{
        await mongoose.connect(urlMongoDB);
        console.log("Connected to MongoDB")
        User.find((err, users) => {
            if (err) res.send(err);
            else {
              console.log(users);
              res.send(users);
              mongoose.connection.close();
            }
          });

    }catch (error) {
        console.log("Error when post in api/register ", error)
    }
   
})

// app.get("http://localhost:5000/api/pet/toowner/", (req, res) => {
//     res.send("User has not logged in")
// })
// app.get("http://localhost:5000/api/request/toowner/", (req, res) => {
//     res.send("User has not logged in")
// })


// app.get("/api/register", async (req, res) => {
//     await mongoose.connect(urlMongoDB);
//     console.log("Connected to DB from get register");
//     res.send("Connected to DB from get register")
//     mongoose.connection.close()
// })

app.use("/api/login", login);
app.use("/api/pet", pet);
app.use("/api/request", request);
app.use("/api/profile", profile);
app.use("/api/register", register);


const user1 = new User({
    email: "mary@somewhere.com",
    password: "12345678",
    firstname : "Green",
    lastname : "Mary",
    phone: "555-555-5555",
    street: "123 Queens way",
    city: "Burnaby",
    province: "BC",
    postcode: "v7a",
    status : true,
})

// user1.save(err => {
//     if(err) console.log("ERROR: ", err)
//     else console.log("Document inserted successfully.")
// })

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`The Backend sever is up and run in port: ${port}`);
})