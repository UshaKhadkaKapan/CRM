import SessionUserSchema from "./SessionSchema.js";

export const insertSession = (obj) => {
  console.log(obj);
  return SessionUserSchema(obj).save();
};

export const deleteSession = (filter) => {
  return SessionUserSchema.findOneAndDelete(filter);
};
