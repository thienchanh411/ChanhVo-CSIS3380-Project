const mongoose = require('mongoose');

const petSchema = mongoose.Schema({

    ownerId: {
        type: String,
        require: [true, "Please enter a pet ower id"],
        trim: true
    },
    petName: {
        type: String,
        required: [true, "Please enter a pet name"],
        trim: true,
    },
    petType: {
        type: String,
        required: [true, "Please enter a pet type"],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, "Please select your pet gender"]
    },
    breed: {
        type: String,
        required: [true, "Please select a type of breed"],
        trim: true,
    },
    age: {
        type: String,
        required: [true, "Please select your pet age"]
    },
    size: {
        type: Number,
        required: [true, "Please select your pet size"],
        max: 6
    },
    isSpayed: {
        type: Boolean,
        required: [true, "Please select the spayed option"]
    },

    color: {
        type: String,
        required: [true, "Please select your pet color"],
    },
    image: {
        type: String,
        required: [true, "Please select your pet image"]
    },
    description: String,
    diet:  String,
    rehomeReason: {
        type: String,
        required: [true, "Please select a reason to rehome your pet"]
    },
    status: String
})

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;