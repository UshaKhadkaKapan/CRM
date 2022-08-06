import Joi from "joi";
import {
  ADDRESS,
  DOB,
  EMAIL,
  FNAME,
  joiValidator,
  LNAME,
  LONGSTR,
  OTP,
  PASSWORD,
  PHONE,
  SHORTSTR,
  STATUS,
} from "./joiConstantValidation.js";

export const adminRegistrationValidation = (req, res, next) => {
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

export const loginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

export const categoryValidation = (req, res, next) => {
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

export const updateCategoryValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

export const paymentMethodValidation = (req, res, next) => {
  // req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    description: LONGSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

export const updatePaymentMethodValidation = (req, res, next) => {
  // req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    description: LONGSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

// user profile
export const updatePassword = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    currentPassword: PASSWORD,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

export const updateAdminPasswordValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    currentPassword: PASSWORD,
    address: ADDRESS,
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

export const newProductValidation = (req, res, next) => {
  const schema = Joi.object({
    status: "active",
    //     "name":"mobile",
    //     "description":"Mobile is awesome",
    //     "price":200,
    //     "qty":44,
    //     "salesPrice":100,
    //     "salesStartDate":"2022/1/22",
    //     "salesEndDate":"2022/3/22",
    //     "catID":"hdjska436727"
  });

  joiValidator(schema, req, res, next);
};
