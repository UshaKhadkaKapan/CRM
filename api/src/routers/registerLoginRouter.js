import express from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { adminRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { createNewAdmin } from "../models/adminUser/AdminModel.js";
const route = express.Router();

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);

    const result = await createNewAdmin(req.body);
    console.log(result);
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

  //   encrypt password
  // call model to run save query
  // unique url endpoint and sent that to customer
});

export default route;
