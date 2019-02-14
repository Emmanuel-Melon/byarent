const Joi = require('joi')

const schema = {
  email: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  username: Joi.string().alphanum().min(3).max(30).required()
}

const validateRegistration = user => Joi.validate(user, schema)

module.exports = {
  validateRegistration
}
