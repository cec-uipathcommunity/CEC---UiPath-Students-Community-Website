require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));


const User = require("./models/User");

app.use(express.json());
app.post("/login", async (req, res) => {
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


app.get("/events/quizquest/quizdashboard/", verifyToken, (req, res) => {
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT} `);
});