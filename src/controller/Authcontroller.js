var { Account } = require("../model/schema");
const HTTP = require("../../constant/response.constant");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

require("dotenv").config();

class class1 {
  static Login = async (req, res) => {
    try {
      
      if (req.body.UserName && req.body.PassWord) {

        var User = await Account.findOne({
          UserName: req.body.UserName
        });

        if (User) {

          var Passwordmatch = await bcrypt.compare(
            req.body.PassWord,
            User.PassWord
          );

          if (Passwordmatch) {

            const token = jwt.sign(
              { 
                UserName: req.body.UserName, 
                Role: User.Role,
                _id:User._id 
              },
              process.env.SECRET_KEY
            );

            var message = {
              message: "Login Successfully",
              Role: User.Role,
              token: token,
              status: `${HTTP.SUCCESS}`,
              error: false,
            };
            res.status(HTTP.SUCCESS).json(message);

          }else{
            var a = {
              message: "Wrong PassWord",
              status: `${HTTP.UNAUTHORIZED}`,
            };
            res.status(HTTP.SUCCESS).json(a);
          }

        } else {
          var a = { message: "User Not Exist", status: `${HTTP.NOT_FOUND}` };
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
