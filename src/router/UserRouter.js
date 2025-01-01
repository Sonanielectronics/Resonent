var express = require("express");
const router = express.Router();

var { class1 } = require('../controller/Usercontroller');

const { isAuth } = require("../middleware/middleware");

router.get("/Get",isAuth,class1.Get);
router.post("/Add",isAuth,class1.Add);
router.put("/Update",isAuth,class1.Update);
router.delete("/Delete",isAuth,class1.Delete);

module.exports = router;