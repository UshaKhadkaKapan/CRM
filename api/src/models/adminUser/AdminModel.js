import AdminSchema from "./AdminSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const addVerificationCodeByUserId = (id, verificationCode) => {
  return AdminSchema.findByIdAndUpdate(_id, {
    verificationCode,
  });
};
