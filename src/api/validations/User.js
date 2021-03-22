const Joi = require("joi");

const registrationValidation = async (req) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const validatedData = await schema.validate(req.body);
  return validatedData;
};

module.exports = {
  registrationValidation,
};
