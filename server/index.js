require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const tokenStore = {};

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));

const User = require("./models/QuizUser");
const QuizDetails = require("./models/QuizDetails");
const UserLog = require("./models/UserLog");
const notificationSchema = new mongoose.Schema({
  content: String,
});

const Notification = mongoose.model('Notification', notificationSchema);

app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json({ success: true, notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/send-notification', async (req, res) => {
  const { content } = req.body;

  try {
    const newNotification = new Notification({ content });
    await newNotification.save();
    res.json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});



app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: 'No record found' });
    }

    if (password !== user.password) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id, userName: user.name }, process.env.JWT_SECRET, { expiresIn: '5h' });
    tokenStore[user._id] = token;

    res.json({ success: true, message: 'Success', authToken: token, userName: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/events/quizquest/quizdashboard/', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const quizDetailsArray = await QuizDetails.find({ userId });

    if (quizDetailsArray.length === 0) {
      return res.status(404).json({ success: false, message: 'Quiz details not found for the user' });
    }

    const userInformation = {
      userName: user.name,
      userEmail: user.email,
      quizDetails: quizDetailsArray.map(quizDetail => ({
        week: quizDetail.week,
        correctQuestions: quizDetail.correctQuestions,
        timeTaken: quizDetail.timeTaken,
        leaderboardPosition: quizDetail.leaderboardPosition,
        totalQuestions: quizDetail.totalQuestions,
      })),
    };
    const userLog = new UserLog({
      userId: user._id,
      userName: user.name,
      loginTime: moment().tz('Asia/Kolkata').format(),
    });
   userLog.save();


    res.json({ success: true, user: userInformation });
  } catch (err) {
    console.error('Error fetching user information:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.userName = decoded.userName;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.redirect('/login');
    }

    res.status(401).json({ message: "Invalid Token" });
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
