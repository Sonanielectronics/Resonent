const  mongoose = require("mongoose");

var  uri = process.env.MongoUrl || "mongodb+srv://DineDeal:OqZOaoxP756hm74R@cluster.xvuzkd5.mongodb.net/ResonentDB"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});