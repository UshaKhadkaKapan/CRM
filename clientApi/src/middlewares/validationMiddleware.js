import Joi from "joi";
import {
  ADDRESS,
  DATE,
  DOB,
  EMAIL,
  FNAME,
  joiValidator,
  LNAME,
  LONGSTR,
  OTP,
  OTY,
  PASSWORD,
  PHONE,
  PRICE,
  SHORTSTR,
  STATUS,
} from "./joiConstantValidation.js";

export const ClientRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    address: ADDRESS,
  });

  joiValidator(schema, req, res, next);
};

export const ClientloginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

export const resetPasswordValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
    otp: OTP.required(),
  });

  joiValidator(schema, req, res, next);
};
