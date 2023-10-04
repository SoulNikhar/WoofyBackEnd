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




// input formate should be like 

// {
//     "name": "John Farmer",
//     "email": "johnfarmer@example.com",
//     "password": "farmer123",
//     "category": "farmer",
//     "personalInfo": {
//       "dateOfBirth": "1985-05-10",
//       "gender": "Male",
//       "nationalID": "1234567890"
//     },
//     "contactInfo": {
//       "phoneNumber": "+1234567890",
//       "address": {
//         "street": "456 Farm Road",
//         "city": "Farmville",
//         "state": "Farming State",
//         "zipCode": "54321",
//         "country": "Farmland"
//       }
//     },
//     "farmInfo": {
//       "farmName": "John's Farm",
//       "farmLocation": "Farmville",
//       "farmSize": 50,
//       "farmingActivities": "Crop farming, Livestock",
//       "experienceYears": 15
//     },
//     "woolInfo": {
//       "animalType": "Sheep",
//       "animalCount": 100,
//       "processingFacilities": "On-site",
//       "productionPractices": "Organic",
//       "specializations": ["Merino", "Alpaca Wool"]
//     }
//   }