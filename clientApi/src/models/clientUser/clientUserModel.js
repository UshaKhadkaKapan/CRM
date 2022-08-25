import UserSchema from "./clientUserSchema.js";

export const createNewUser = (obj) => {
  return UserSchema(obj).save();
};
