var { Patient } = require("../model/patientschema");
const HTTP = require("../../constant/response.constant");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

require("dotenv").config();

class class1 {
  static Add = async (req, res) => {
    try {

      if (req.body.Name && req.body.Age && req.body.Gender && req.body.Phone) {

        var User = await Patient.findOne({
          Phone: req.body.Phone,
          CreatedBy: req._id
        });

        if (!User) {

          let data = new Patient({
            Name: req.body.Name,
            Age: req.body.Age,
            Gender: req.body.Gender,
            Phone: req.body.Phone,
            CreatedBy: req._id
          });

          await data.save();

          var a = {
            message: "Patient Add Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);

        } else {
          var a = {
            message: "Patient Already Exist",
            code: `${HTTP.CONFLICT}`,
          };
          res.status(HTTP.SUCCESS).json(a);
        }
                                                                                                       
      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.BAD_REQUEST).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static Get = async (req, res) => {
    try {

      if (req.Role == "Admin" || req.Role == "Doctor") {

        var Patients = await Patient.find({
          CreatedBy:req._id
        });

          var a = {
            Patients: Patients,
            message: "Patient Fetch Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);
                                                                   
      } else {
        var a = { message: "UN AUTHORIZED", status: `${HTTP.UNAUTHORIZED}` };
        res.status(HTTP.UNAUTHORIZED).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static Delete = async (req, res) => {
    try {

      if (req.Role == "Admin" || req.Role == "Doctor") {

        var User = await Patient.findOneAndDelete({
          _id:req.body._id
        });

          var a = {
            User: User,
            message: "User Delete Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);

        
                                                                                                       
      } else {
        var a = { message: "UN AUTHORIZED", status: `${HTTP.UNAUTHORIZED}` };
        res.status(HTTP.UNAUTHORIZED).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static Update = async (req, res) => {
    try {

      if (req.body.Name && req.body.Age && req.body.Gender && req.body.Phone) {

        var User = await Patient.findOne({
          Phone: req.body.Phone
        });

        if (User) {

          User.Name = req.body.Name
          User.Age = req.body.Age
          User.Gender = req.body.Gender
          await User.save();

          var a = {
            message: "Patient Update Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);

        } else {
          var a = {
            message: "Patient Not Exist",
            code: `${HTTP.NOT_FOUND}`,
          };
          res.status(HTTP.SUCCESS).json(a);
        }
                                                                                                       
      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.BAD_REQUEST).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
}

module.exports = { class1 };
