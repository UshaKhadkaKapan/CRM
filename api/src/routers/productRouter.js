import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/validationMiddleware.js";
import { insertProduct } from "../models/product/ProductModel.js";
const route = express.Router();

route.post("/", newProductValidation, async (req, res, next) => {
  try {
    console.log(req.body);

    // create slug
    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });
    const product = await insertProduct(req.body);
    product?._id
      ? res.json({
          status: "success",
          message: "New product has been added ",
        })
      : res.json({
          status: "error",
          message: "Unable to add the product",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "Product with same name has been already exist. Please change the name and try again later";
    }
    next(error);
  }
});

export default route;
