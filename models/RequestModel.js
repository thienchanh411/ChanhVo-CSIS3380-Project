const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
    senderId:{
        type: String,
        require: [true, "Please enter a sender id"],
        trim: true
    },
    ownerId:{
        type: String,
        require: [true, "Please enter a owner id"],
        trim: true
    },
    petId:{
        type: String,
        require: [true, "Please enter a pet id"],
        trim: true
    },
    requestTime: String,
    responseTime: String,
    status: {
        type: String,
        require: [true, "Please enter request status"],
        trim: true
    }
})

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;