import express from "express";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../helper/bcryptHelper.js";
import { sendAdminClientVerificationMail } from "../helper/emailHelper.js";
import { ClientRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { createNewUser } from "../models/clientUser/clientUserModel.js";
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
      console.log(result);
      res.json({
        status: "success",
        message: "todo get method",
      });
    }
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exist";
    }
    next(error);
  }
});

export default router;
