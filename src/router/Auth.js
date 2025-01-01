var express = require("express");
const router = express.Router();

var { class1 } = require('../controller/Authcontroller');

router.post("/Login",class1.Login);

module.exports = router;