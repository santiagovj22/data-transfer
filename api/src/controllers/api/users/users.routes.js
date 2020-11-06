const express = require("express");

const { getUsers, createUser } = require("../../../services/users/user.services");
const Joi = require("../../../services/users/user.schema");
const users = express.Router();

users.get("/", async (req, res) => {
  res.json({ data: await getUsers() }).status(200);
});

users.post("/", async (req, res) => {
  const validation = Joi.validate(req.body);
  const { value, error } = validation;
  const valid = error == null;
  if (!valid) {
    res.json({
        success: false,
        message: "Invalid data!, Please try again",
        status: 400,
      })
      .status(400);
  } else {
    console.log(req.body)
    const result = await createUser(req.body);
    res.json({ data: result, success: true, code: 201 }).status(201);
  }
});

module.exports = users;
