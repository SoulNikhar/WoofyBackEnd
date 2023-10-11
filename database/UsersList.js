const mongoose = require("mongoose");

const userlistSchema = new mongoose.Schema({
  farmName: String,
  farmSize: Number,
  userId: Number,
  farmLocation: String,
  woolType: String,
  woolDate: String,
  dateOfDelivery: String,
});

module.exports = mongoose.model("userlist", userlistSchema);
