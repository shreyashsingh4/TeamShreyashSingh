const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true } // store filename
});

module.exports = mongoose.model("Member", MemberSchema);
