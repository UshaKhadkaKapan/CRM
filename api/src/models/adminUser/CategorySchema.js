import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
      maxlength: 50,
      minlength: 3,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxlength: 50,
      trim: true,
    },
    parentCatId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Category", CategorySchema);
