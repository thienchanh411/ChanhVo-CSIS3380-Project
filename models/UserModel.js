const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter valid email"],
        trim: true,
        lowercase: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        trim: true,
        minlenght: 8
    },
    firstname: {
        type: String,
        required: [true, "Please enter First name"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter Last name"]
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"]
    },
    street: {
        type: String,
        required: [true, "Please enter your Steet"]
    },
    city: {
        type: String,
        required: [true, "Please enter your City"]
    },
    province: {
        type: String,
        required: [true, "Please enter your Provice"]
    },
    postcode: {
        type: String,
        required: [true, "Please enter postcode"]
    },
    status: {
        type: Boolean,
        required: [true, "Please enter user status"]
    },
    avatar: String

});

const User = mongoose.model("User", userSchema);
module.exports =User;