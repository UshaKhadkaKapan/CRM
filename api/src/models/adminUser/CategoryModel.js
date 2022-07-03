import CategorySchema from "./CategorySchema.js";

export const createCategory = (obj) => {
  return CategorySchema(obj).save();
};
