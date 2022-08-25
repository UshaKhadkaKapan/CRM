import express from "express";
import { ClientRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { createNewUser } from "../models/clientUser/clientUserModel.js";
const router = express.Router();

router.post("/", ClientRegistrationValidation, async (req, res, next) => {
  try {
    const result = await createNewUser(req.body);
    console.log(result);

    if (result?._id) {
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
    next(error);
  }
});

export default router;
