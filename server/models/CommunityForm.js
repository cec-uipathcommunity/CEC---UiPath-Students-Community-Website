const mongoose = require('mongoose');

const communityFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  college: String,
  class: String,
  branch: String,
  projects: String,
  motivation: String,
});

const CommunityForm = mongoose.model('CommunityForm', communityFormSchema);

module.exports = CommunityForm;