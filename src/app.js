const  express = require("express");
const cors = require('cors');
const  app = express();

app.use(cors());

require("./db/conn");
const Authrouter = require('./router/Auth');
const UserRouter = require('./router/UserRouter');
const EndUserRouter = require('./router/EndUserRouter');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var path = require("path");

app.use(express.static(path.join(__dirname, "../public"))); 

require("dotenv").config();

const  port = process.env.PORT || 8080;

app.use('/', Authrouter);
app.use('/User', UserRouter);
app.use('/EndUser', EndUserRouter);

app.listen(port, () => {
console.log(`Server running at ` + port);
});