const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const duckRoute = require("./api/router/duckRouter");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://jeyanth:user123@webproject.smhz3.mongodb.net/test?authSource=admin&replicaSet=atlas-2dlsll-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database Connected")
);

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", duckRoute);

console.log("runnning server now");
console.log(process.env.PORT);

app.listen(process.env.PORT || 8080);

