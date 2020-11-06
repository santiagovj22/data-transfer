const joi = require("@hapi/joi");

module.exports = joi.object({
  name: joi.string().min(2).max(50).required(),

  email: joi.string().email().required(),

  department: joi.string().required(),

  city: joi.string().required(),
});
