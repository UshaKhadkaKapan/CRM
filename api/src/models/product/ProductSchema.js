import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },

    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      index: 1,
      maxLength: 20,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxLength: 5000,
    },
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
      default: null,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],

    thumbnail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    salesPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    salesStartDate: {
      type: Date,
      default: null,
    },
    salesEndDate: {
      type: Date,
      default: null,
    },
    ratings: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(" Product", productSchema);
