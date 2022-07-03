import express from "express";
import { categoryValidation } from "../middlewares/validationMiddleware.js";
import { createCategory } from "../models/adminUser/CategoryModel.js";
import slugify from "slugify";

const router = express.Router();

// add the catogery
router.post("/", categoryValidation, async (req, res, next) => {
  try {
    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });
    const result = await createCategory(req.body);

    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New Category has been added",
        })
      : res.json({
          status: "error",
          message: "Unable to create the category please try again",
        });
  } catch (error) {
    error.status = 500;

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "This category has already exist. use the different name";
    }
    next(error);
  }
});

export default router;
