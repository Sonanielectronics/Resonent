var mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  Name: { type: String , required: true },
  Phone: { type: String , required: true },
  Age: { type: String , required: true },
  Gender: { type: String , required: true },
  CreatedBy: { type: mongoose.Schema.ObjectId , required: true }
},{ timestamps: true });

var Patient = mongoose.model('Patient', PatientSchema);

module.exports = { Patient };