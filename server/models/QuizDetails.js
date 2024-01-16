const mongoose = require("mongoose");

const quizDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
  correctQuestions: {
    type: Number,
    required: true,
  },
  timeTaken: {
    type: String,
    required: true,
  },
  leaderboardPosition: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
},{ collection: 'QuizDetail'});

quizDetailsSchema.index({ userId: 1, week: 1, leaderboardPosition: 1 }, { unique: true });

const QuizDetails = mongoose.model("QuizDetails", quizDetailsSchema);

module.exports = QuizDetails;
