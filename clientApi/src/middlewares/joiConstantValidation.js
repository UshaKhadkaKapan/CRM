import Joi from "joi";

export const FNAME = Joi.string().min(3).max(50).required();
export const LNAME = Joi.string().min(3).max(50).required();
export const DOB = Joi.date().allow(null, "");
export const PHONE = Joi.string().min(3).max(50).required();
export const EMAIL = Joi.string()
  .email({ minDomainSegments: 2 })
  .max(30)
  .required();
export const PASSWORD = Joi.string().min(3).max(50).required();
export const ADDRESS = Joi.string().allow("").max(50).required();
export const STATUS = Joi.string().min(3).max(50).required();

export const SHORTSTR = Joi.string().max(100);
export const LONGSTR = Joi.string().max(5000);
export const OTP = Joi.string().max(6);
export const PRICE = Joi.number().max(10000);
export const OTY = Joi.number().max(10000);
export const DATE = Joi.date().allow(" ", null);

export const joiValidator = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
  next();
};
