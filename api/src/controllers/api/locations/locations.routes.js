const express = require("express");

const { locationsApi } = require("../../../dataAccessLayer/locations/locations");
const locations = express.Router();

locations.get("/", async (req, res) => {
  res.json( await locationsApi()).status(200);
});

module.exports = locations;
