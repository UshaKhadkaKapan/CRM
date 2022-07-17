import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },

    name: {
      type: String,
      required: true,
      maxLength: 50,
    },

    description: {
      type: String,
      default: "",
      maxLength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(" Payment-method", paymentMethodSchema);
