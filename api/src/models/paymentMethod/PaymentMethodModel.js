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

//update must be an object
export const updatePaymentMethodByID = ({ _id, ...update }) => {
  return PaymentMethodSchema.findByIdAndUpdate(_id, update, { new: true });
};

//filter nad update must be an object
export const deletePaymentMethodById = (_id) => {
  return PaymentMethodSchema.findByIdAndDelete(_id);
};
