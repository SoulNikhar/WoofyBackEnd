const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    email: String,
    password:String,
    category:String,
    personalInfo: {
        dateOfBirth: Date,
        gender: String,
        nationalID: String,
    },
    contactInfo: {
        phoneNumber: Number,
        address: {
            street: String,
            city: String,
            state: String,
            pinCode: Number,
            country: String,
        },
    },
    farmInfo: {
        farmName: String,
        farmLocation: String,
        farmSize: Number,
        farmingActivities: String,
        experienceYears: Number,
    },
    woolInfo: {
        animalType: String, // e.g., "Sheep," "Alpaca"
        animalCount: Number,
        processingFacilities: String,
        productionPractices: String,
        specializations: [String], // Array of specializations
    }
});

module.exports = mongoose.model("users", userSchema);



