var jwt = require("jsonwebtoken");

const HTTP = require("../../constant/response.constant");

exports.isAuth = function (req, res, next) {

    const token = req.headers['authorization'];
    if (!token) {
      return res.status(HTTP.FORBIDDEN).json({ message: 'Token not provided', "status": `${HTTP.FORBIDDEN}` });
    }
  
    var SECRET_KEY = process.env.SECRET_KEY || "YOURSECRETKEY";
                                                
    jwt.verify(token, SECRET_KEY, (err, decoded) => {

      if (err) {
        return res.status(HTTP.UNAUTHORIZED).json({ message: 'Invalid token', "status": `${HTTP.UNAUTHORIZED}` });
      }

      req.UserName = decoded.UserName;
      req.Role = decoded.Role;
      req._id = decoded._id;
      next();

    });

}