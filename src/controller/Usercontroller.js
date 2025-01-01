var { Account } = require("../model/schema");
const HTTP = require("../../constant/response.constant");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

require("dotenv").config();

class class1 {
  static Add = async (req, res) => {
    try {

      if (req.body.UserName && req.body.PassWord) {

        var User = await Account.findOne({
          UserName: req.body.UserName
        });

        if (!User) {

          const hashedPassword = await bcrypt.hash(req.body.PassWord, 12);

          let data = new Account({
            UserName: req.body.UserName,
            PassWord: hashedPassword,
            Role: "Doctor"
          });

          await data.save();

          var a = {
            message: "Doctor Add Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);

        } else {
          var a = {
            message: "Doctor Already Exist",
            code: `${HTTP.CONFLICT}`,
          };
          res.status(HTTP.SUCCESS).json(a);
        }
                                                                                                       
      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.SUCCESS).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.SUCCESS).json(a);
    }
  };
  static Get = async (req, res) => {
    try {

      if (req.Role == "Admin") {

        var User = await Account.find({
          Role:"Doctor"
        });

          var a = {
            User: User,
            message: "User Fetch Successfully",
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

      if (req.Role == "Admin") {

        var User = await Account.findOneAndDelete({
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

      if (req.body.UserName && req.body.PassWord) {

        var User = await Account.findOne({
          UserName: req.body.UserName
        });

        if (User) {

          const hashedPassword = await bcrypt.hash(req.body.PassWord, 12);
          User.PassWord = hashedPassword
          await User.save();

          var a = {
            message: "Doctor Update Successfully",
            code: `${HTTP.SUCCESS}`,
          };
          res.status(HTTP.SUCCESS).json(a);

        } else {
          var a = {
            message: "Doctor Not Exist",
            code: `${HTTP.NOT_FOUND}`,
          };
          res.status(HTTP.SUCCESS).json(a);
        }
                                                                                                       
      } else {
        var a = { message: "Insufficient Data", status: `${HTTP.BAD_REQUEST}` };
        res.status(HTTP.SUCCESS).json(a);
      }

    } catch (e) {
      console.log(e);

      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.SUCCESS).json(a);
    }
  };
}

module.exports = { class1 };
