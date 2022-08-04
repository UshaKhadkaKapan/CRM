import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  adminRegistrationValidation,
  loginValidation,
  resetPasswordValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createNewAdmin,
  getOndAdmin,
  updateAdmin,
} from "../models/adminUser/AdminModel.js";
import { v4 as uuidv4 } from "uuid";
import {
  emailPasswordResetOPT,
  profileUpdatedVerificationMail,
  sendAdminUserVerificationMail,
} from "../helpers/emailHelper.js";

import { randomNumberGenerator } from "../utils/randomGenerator.js";
import {
  deleteSession,
  insertSession,
} from "../models/session/SessionModal.js";
import { createJWTs } from "../helpers/jwtHelper.js";
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
        const tokens = await createJWTs({ email });
        if (result.status === "active") {
          res.json({
            status: "success",
            message: "Login success",
            result,
            ...tokens,
          });
        } else {
          res.json({
            status: "error",
            message: "Your account is invalid",
          });
        }
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

// request otp or password reset
route.post("/otp-request", async (req, res, next) => {
  try {
    const { email } = req.body;

    if (email.length > 4 && email.length < 50) {
      // find the user if it exist

      const user = await getOndAdmin({ email });
      if (user?._id) {
        const otpLength = 6;
        const otp = randomNumberGenerator(otpLength);

        const obj = {
          token: otp,
          associate: email,
          type: "updatePassword",
        };
        const result = await insertSession(obj);
        console.log(result);
        if (result?._id) {
          const mailInfo = {
            fName: user.fName,
            email: user.email,
            otp,
          };
          console.log(mailInfo);
          emailPasswordResetOPT(mailInfo);
        }
      }
      // generate random 6 digits opt
      // send otp to the user
      // respond to the user
    }
    res.json({
      status: "success",
      message:
        "if your email exist in register, we will send you opt please follow the instruction",
    });
  } catch (error) {
    next(error);
  }
});
// reset new password

route.patch("/password", resetPasswordValidation, async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;

    const filter = {
      token: otp,
      associate: email,
      type: "updatePassword",
    };

    // first chaeck if otp and email combination exist in the session table and delete it

    const isDeleted = await deleteSession(filter);
    console.log(isDeleted);
    if (isDeleted?._id) {
      // encrypt password
      const obj = {
        password: hashPassword(password),
      };
      // update pasword in the user table
      const result = await updateAdmin({ email }, obj);
      if (result?._id) {
        // send email Notificationof account update
        profileUpdatedVerificationMail(result);
        return res.json({
          status: "success",
          message: "you may login in now",
        });
      }
    }

    res.json({
      status: "error",
      message: "unable to reset your password. try again later",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
