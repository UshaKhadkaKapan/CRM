import ProductSchema from "./ProductSchema.js";

export const insertProduct = (obj) => {
  return ProductSchema(obj).save();
};

//@filter must be an object
export const getProduct = (filter) => {
  return ProductSchema.findOne(filter);
};

export const getMultipleProducts = (filter) => {
  return ProductSchema.find(filter);
};

export const updateProductById = (_id, updateObj) => {
  return ProductSchema.findByIdAndUpdate(_id, updateObj, { new: true });
};

export const updateProduct = (filter, updateObj) => {
  return ProductSchema.findOneAndUpdate(filter, updateObj, { new: true });
};

export const deleteProduct = (filter) => {
  return ProductSchema.findOneAndDelete(filter);
};

export const deleteMultipleProducts = (ids) => {
  return ProductSchema.deleteMany({
    _id: { $in: ids },
  });
};
