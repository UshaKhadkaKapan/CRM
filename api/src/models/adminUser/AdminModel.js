import AdminSchema from "./AdminSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const updateAdmin = (filter, obj) => {
  return AdminSchema.findOneAndUpdate(filter, obj, { new: true });
};

export const addVerificationCodeByUserId = (id, verificationCode) => {
  return AdminSchema.findByIdAndUpdate(_id, {
    verificationCode,
  });
};

// @filter must be object like email and password
export const getOndAdmin = (filter) => {
  return AdminSchema.findOne(filter);
};
