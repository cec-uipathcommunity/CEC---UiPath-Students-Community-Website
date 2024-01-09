require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
const PORT = process.env.PORT||3000;
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));


const User = require("../models/User");

app.use(express.json());

const router = express.Router();
router.get("/",(req,res)=>{
  res.json({msg:"hello"})
})
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ success: false, message: "No Record" });
    }

    if (password !== user.password) {
      return res.status(401).json({ success: false, message: "The Password is Incorrect" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, message: "Success", authToken: token, userName: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/events/quizquest/quizdashboard/", verifyToken, (req, res) => {
  const userId = req.userId;
  const userName = req.userName;

  res.json({ message: "Welcome to the quiz dashboard, " + userName + "!" });
});

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.redirect("/login");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      req.userName = decoded.userName;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  }
}

app.use("/.netlify/functions/api",router);
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

module.exports.handler = serverless(app);