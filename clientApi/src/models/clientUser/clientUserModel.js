import UserSchema from "./clientUserSchema.js";

export const createNewUser = (obj) => {
  return UserSchema(obj).save();
};

export const updateUser = (filter, obj) => {
  return UserSchema.findOneAndUpdate(filter, obj, { new: true });
};
