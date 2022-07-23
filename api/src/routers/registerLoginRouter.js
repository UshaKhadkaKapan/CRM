import express, { Router } from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  adminRegistrationValidation,
  loginValidation,
} from "../middlewares/validationMiddleware.js";
import {
  addVerificationCodeByUserId,
  createNewAdmin,
  getOndAdmin,
  updateAdmin,
} from "../models/adminUser/AdminModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";
const route = express.Router();

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;

    const result = await createNewAdmin(req.body);
    console.log(result);

    if (result?._id) {
      console.log(result);
      sendAdminUserVerificationMail(result);
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
      // console.log("Errrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    }
    next(error);
  }

  //   encrypt password
  // call model to run save query
  // unique url endpoint and sent that to customer
});

route.patch("/", async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    if (email && verificationCode) {
      const filter = { email, verificationCode };
      const obj = {
        status: "active",
        verificationCode: "",
      };

      const result = await updateAdmin(filter, obj);

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

// admin user login
route.post("/login", loginValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await getOndAdmin({ email });

    if (result?._id) {
      const isMatch = comparePassword(password, result.password);
      result.password = undefined;
      if (isMatch) {
        return result.status === "active"
          ? res.json({
              status: "success",
              message: "Login success",
              result,
            })
          : res.json({
              status: "error",
              message: "Your account is invalid",
            });
      }
    }
    res.json({
      status: "error",
      message: "Invalid creditential",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
