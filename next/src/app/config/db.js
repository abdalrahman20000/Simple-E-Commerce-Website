const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGO_URL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection successful");
});

module.exports = mongoose;
