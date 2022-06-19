import Joi from "joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    DOB: Joi.date(),
    phone: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).max(30),
    password: Joi.string().min(3).max(50).required(),
    address: Joi.string().allow("").max(50),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};
