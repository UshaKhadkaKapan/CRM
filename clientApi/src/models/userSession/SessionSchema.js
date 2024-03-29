import mongoose from "mongoose";

const SessionUserSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    associate: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User-session", SessionUserSchema);
