import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import { profileUpdatedVerificationMail } from "../helpers/emailHelper.js";
import {
  updateAdminPasswordValidation,
  updatePassword,
} from "../middlewares/validationMiddleware.js";
import { getOndAdmin, updateAdmin } from "../models/adminUser/AdminModel.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// update admin profile
router.put("/", updateAdminPasswordValidation, async (req, res, next) => {
  try {
    const { currentPassword, password, email, ...rest } = req.body;

    //   check if user exit for the give email

    const user = await getOndAdmin({ email });
    //   if so, check if the pasword
    if (user?._id) {
      const isMatched = comparePassword(currentPassword, user.password);
      if (isMatched) {
        const filter = { _id: user._id };

        const updatedAdmin = await updateAdmin(filter, rest);

        if (updatedAdmin?._id) {
          res.json({
            status: "success",
            message: "Your Profile has been updated",
            user,
          });
          profileUpdatedVerificationMail(user);
          return;
        }
      }
    }
    res.json({
      status: "error",
      message: "Unable to updated the data",
    });
  } catch (error) {
    next(error);
  }
});

//   update admin password as loggied in user

router.patch("/", updatePassword, async (req, res, next) => {
  try {
    const { currentPassword, password, email } = req.body;

    //   check if user exit for the give email

    const user = await getOndAdmin({ email });
    //   if so, check if the pasword
    if (user?._id) {
      const isMatched = comparePassword(currentPassword, user.password);
      if (isMatched) {
        const hashsPass = hashPassword(password);

        const filter = { _id: user._id };

        const obj = {
          password: hashsPass,
        };
        const updatedAdmin = await updateAdmin(filter, obj);

        if (updatedAdmin?._id) {
          res.json({
            status: "success",
            message: "New password has been updated",
          });
          profileUpdatedVerificationMail(user);
          return;
        }
      }
    }

    res.json({
      status: "error",
      message: "Invalid current password",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
