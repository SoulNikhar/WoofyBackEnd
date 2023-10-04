const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId:Number,
    name: String,
    email:String,
    
});

module.exports = mongoose.model("producerdetails",userSchema);
