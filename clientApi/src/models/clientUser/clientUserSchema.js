import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 50,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 15,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      maxLength: 100,
    },
    dob: {
      type: Date,
      default: null,
    },
    address: {
      type: String,
      maxLength: 50,
    },
    verificationCode: {
      type: String,
      maxLength: 50,
    },
    // refreshJWT: {
    //   type: String,
    //   default: "",
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client_user", UserSchema);
