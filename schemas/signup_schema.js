const Joi = require('joi');
var signupSchema = {
    body: {
        Employee_Name: Joi.string().required(),     
        email: Joi.string().email({ minDomainAtoms: 2 }),
      password: Joi.string().required(),
      phoneNumber: Joi.string().required(),
        Designation: Joi.string().required(),
        state: Joi.string().required(),
    }
};
module.exports = {

  signupSchema: signupSchema
}