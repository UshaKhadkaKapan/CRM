import SessionUserSchema from "./SessionSchema.js";

//create
export const insertSession = (obj) => {
  console.log(obj);
  return SessionUserSchema(obj).save();
};

//delete
export const deleteSession = (filter) => {
  return SessionUserSchema.findOneAndDelete(filter);
};

//read
export const getSession = (filter) => {
  return SessionUserSchema.findOne(filter);
};
