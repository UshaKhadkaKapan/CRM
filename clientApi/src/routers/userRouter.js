import express from "express";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../helper/bcryptHelper.js";
import {
  emailPasswordClientResetOPT,
  profileUpdatedVerificationMailForClient,
  sendAdminClientVerificationMail,
} from "../helper/emailHelper.js";
import {
  ClientRegistrationValidation,
  resetPasswordValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createNewUser,
  getOneClient,
  updateClient,
  updateUser,
} from "../models/clientUser/clientUserModel.js";
import {
  deleteSession,
  insertSession,
} from "../models/userSession/SessionModal.js";
import { randomNumberGenerator } from "../utility/randomGenerator.js";
const router = express.Router();

router.post("/", ClientRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const verification = uuidv4();
    req.body.verificationCode = verification;
    const result = await createNewUser(req.body);
    console.log(result);
    if (result?._id) {
      sendAdminClientVerificationMail(result);

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

router.post("/otp-request", async (req, res, next) => {
  try {
    const { email } = req.body;

    if (email.length > 4 && email.length < 50) {
      // find the user if it exist

      const user = await getOneClient(email);
      if (user?._id) {
        const otpLength = 6;
        const otp = randomNumberGenerator(otpLength);

        const obj = {
          token: otp,
          associate: email,
          type: "updatePassword",
        };
        const result = await insertSession(obj);
        console.log(result, "THIS IS AJOHFIUDAHFIJDF");
        if (result?._id) {
          const mailInfo = {
            fName: user.fName,
            email: user.email,
            otp,
          };
          emailPasswordClientResetOPT(mailInfo);
        }
      }
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

router.patch("/password", resetPasswordValidation, async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;

    const filter = {
      token: otp,
      associate: email,
      type: "updatePassword",
    };
    console.log(filter);

    // first chaeck if otp and email combination exist in the session table and delete it

    const isDeleted = await deleteSession(filter);
    console.log(isDeleted);
    if (isDeleted?._id) {
      // encrypt password
      const obj = {
        password: hashPassword(password),
      };
      // update pasword in the user table
      const result = await updateClient({ email }, obj);
      if (result?._id) {
        // send email Notificationof account update
        profileUpdatedVerificationMailForClient(result);
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

export default router;
