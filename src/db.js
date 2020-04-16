const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;
console.log(uri);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

const connection = mongoose.connection;

connection.once("open", () =>
  console.log("Connection established successfully to the DB")
);
connection.on("error", (err) =>
  console.log("Something went wrong with the DB connection!", err)
);

module.exports = connection;
