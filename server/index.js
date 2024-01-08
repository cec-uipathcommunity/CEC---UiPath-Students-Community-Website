require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); 
const bcrypt = require("bcrypt");
const app = express();
app.use(cors()); 
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database Not Connected", err);
  });
  const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  }, { collection: 'participants' }); 
  const User = mongoose.model("User", userSchema);
app.use(express.json());
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        if (user.password === password) { 
          console.log("Success: Password Matched");
          res.json({ success: true, message: "Success" });
        } else {
          console.log("Fail: Password Incorrect");
          res.json({ success: false, message: "The Password is Incorrect" });
        }
      } else {
        console.log("Fail: User Not Found");
        res.json({ success: false, message: "No Record" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  
  
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
