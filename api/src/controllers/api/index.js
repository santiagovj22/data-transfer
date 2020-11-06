const express = require("express");
const users = require("./users/users.routes");
const locations = require("./locations/locations.routes");

const api = express.Router();

api.use("/users", users);
api.use("/locations", locations);

module.exports = api;
