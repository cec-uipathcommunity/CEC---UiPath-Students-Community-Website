const mongoose = require('mongoose');
const moment = require('moment-timezone');

const userLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  loginTime: {
    type: Date,
    required: true,
    get: function () {
      return moment(this.getDataValue('loginTime')).tz('Asia/Kolkata').format();
    },
  },
  createdAt: { type: Date, default: Date.now },
});

const UserLog = mongoose.model('UserLog', userLogSchema);

module.exports = UserLog;
