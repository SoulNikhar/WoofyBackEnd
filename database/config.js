const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/databaseSecond");


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
