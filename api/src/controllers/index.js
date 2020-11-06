const api = require("./api/index");

const express = require("express");

const controllers = express.Router();

controllers.get("/", (req, res) => {
  res.json({ title: "Technical test for sigma studios" }).status(200);
});

controllers.use("/api/v1", api);

module.exports = controllers;
