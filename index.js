const express = require("express");
const cors = require("cors");
require("./database/config");
const User = require("./database/Users");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  // ----------- Removing Password-----------
  result = result.toObject();
  delete result.password
  res.send(result);
});

//  ---------------------- Authentication while Login ---------------------------
app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let userDetail = await User.findOne(req.body).select("-password");
    if (userDetail) {
      res.send(userDetail);
    } else {
      res.send({userDetail : "User not Found "})
    }
  } else {
    console.log("User Not found 2  !! ");
    res.send({result :"Bad Request"});
  }
});


app.listen(5000, () => {
  console.log("sucessfully connected... ");
});

