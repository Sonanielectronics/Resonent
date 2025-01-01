var mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  UserName: { type: String , required: true },
  PassWord: { type: String , required: true },
  Role: { type: String , required: true },
},{ timestamps: true });

var Account = mongoose.model('Account', AccountSchema);

module.exports = { Account };