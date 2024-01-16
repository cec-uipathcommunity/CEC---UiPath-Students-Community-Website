const mongoose = require("mongoose");

const quizWinnerSchema = new mongoose.Schema({
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
});

const quizWinner = mongoose.model("quizWinner", userSchema);

module.exports = quizWinner;
