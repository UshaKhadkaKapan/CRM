import CategorySchema from "./CategorySchema.js";

export const createCategory = (obj) => {
  return CategorySchema(obj).save();
};

export const getCategories = () => {
  return CategorySchema.find();
};

export const getCategoryById = (_id) => {
  return CategorySchema.findById(_id);
};

export const updateCategoryById = ({ _id, ...obj }) => {
  return CategorySchema.findByIdAndUpdate(_id, obj, { new: true });
};

// ids must be any array
export const deleteCategoryByIds = (ids) => {
  return CategorySchema.deleteMany({ _id: { $in: ids } });
};
