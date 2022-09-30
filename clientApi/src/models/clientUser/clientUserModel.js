import UserSchema from "./clientUserSchema.js";

export const createNewUser = (obj) => {
  return UserSchema(obj).save();
};

export const updateUser = (filter, obj) => {
  return UserSchema.findOneAndUpdate(filter, obj, { new: true });
};

export const deleteSession = (filter) => {
  return UserSchema.findOneAndDelete(filter);
};

export const updateClient = (filter, obj) => {
  return UserSchema.findOneAndUpdate(filter, obj, { new: true });
};
