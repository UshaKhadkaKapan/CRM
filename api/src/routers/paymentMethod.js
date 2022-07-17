import express from "express";
import { paymentMethodValidation } from "../middlewares/validationMiddleware.js";
import { createPaymentMethod } from "../models/paymentMethod/PaymentMethodModel.js";
const router = express.Router;

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", paymentMethodValidation, async (req, res, next) => {
  try {
    const result = await createPaymentMethod(req.body);

    resutl?._id
      ? res.json({
          status: "success",
          message: "The new payment has been added",
        })
      : res.json({
          status: "error",
          message: "Sorry! cannot added the payment.Please try again later ",
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo put method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/:_id", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo delete method",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
