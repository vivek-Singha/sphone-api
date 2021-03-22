const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/mongodb");

const authorizationRoute = require("./api/routes/authorization");

const app = express();

// * Connecting mongodb
connectDb();

// * Configuring bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Configuring dotenv
dotenv.config();

// * Port
const port = process.env.PORT || 3000;

// * /api/
app.use("/api/", authorizationRoute);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
