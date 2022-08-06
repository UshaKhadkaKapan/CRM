import express from "express";
import { newProductValidation } from "../middlewares/validationMiddleware.js";
const route = express.Router();

route.post("/", newProductValidation, (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "New product has been added ",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
