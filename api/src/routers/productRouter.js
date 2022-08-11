import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/validationMiddleware.js";
import { insertProduct } from "../models/product/ProductModel.js";
import { getMultipleProducts } from "../models/product/ProductModel.js";
const route = express.Router();

// multer is middleware to support formData or uploading files
import multer from "multer";
const fileStoragePath = "public/img/products";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    cb(error);
  },
  filename: (req, file, cd) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cd(null, fullFileName);
  },
});

const upload = multer({ storage });

route.post(
  "/",
  upload.array("images", 5),
  newProductValidation,
  async (req, res, next) => {
    try {
      // handle the post image upload
      const files = req.files;
      console.log(files);

      const images = files.map((img) => img.path);
      // create slug
      const slug = slugify(req.body.name, {
        lower: true,
        trim: true,
      });
      console.log(slug);
      req.body.slug = slug;
      const product = await insertProduct({
        ...req.body,
        images,
        thumbnail: images[0],
      });
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
  }
);

route.get("/", async (req, res, next) => {
  try {
    const products = await getMultipleProducts();

    res.json({
      status: "success",
      message: "Products Lists",
      products,
    });
  } catch (error) {
    next(error);
  }
});

export default route;
