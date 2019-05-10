const Joi = require("joi");

var loginSchema = {
  body: {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password : Joi.string().required()
  }
};

module.exports = {
  loginSchema: loginSchema
};
