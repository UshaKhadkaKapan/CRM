import PaymentMethodSchema from "./PaymentSchema.js";

export const createPaymentMethod = (obj) => {
  return PaymentMethodSchema(obj).save;
};

export const getPaymentMethods = () => {
  return PaymentMethodSchema.find();
};

// filter must be object
export const getPaymentMethod = (filter) => {
  return PaymentMethodSchema.findOne(filter);
};

//filter nad update must be an object
export const updatePaymentMethod = (filter, update) => {
  return PaymentMethodSchema.findOne(filter, update, { new: true });
};

//filter nad update must be an object
export const deletePaymentMethod = (filter) => {
  return PaymentMethodSchema.findOneAndDelete(filter);
};
