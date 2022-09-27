import express from "express";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../helper/bcryptHelper.js";
import { sendAdminClientVerificationMail } from "../helper/emailHelper.js";
import { ClientRegistrationValidation } from "../middlewares/validationMiddleware.js";
import {
  createNewUser,
  updateUser,
} from "../models/clientUser/clientUserModel.js";
const router = express.Router();

router.post("/", ClientRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;
    const result = await createNewUser(req.body);

    if (result?._id) {
      sendAdminClientVerificationMail(result);
      console.log(result);
      return res.json({
        status: "success",
        message: "We have sent you verification",
      });
    }
    res.json({
      status: "success",
      message: "We have sent you an email,please follow the step",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    if (email && verificationCode) {
      const filter = { email, verificationCode };
      const obj = {
        status: "active",
        verificationCode: "",
      };

      const result = await updateUser(filter, obj);

      if (result?._id) {
        return res.json({
          status: "success",
          message: "You account has been activate, you can sign in.",
        });
      }
    }

    res.json({
      status: "error",
      message: "Invalid or expired link",
    });

    console.log(req.body);
  } catch (error) {
    next(error);
  }
});

export default router;
