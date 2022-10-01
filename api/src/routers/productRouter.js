import express, { Router } from "express";
import slugify from "slugify";
import {
  newProductValidation,
  updateProductValidation,
} from "../middlewares/validationMiddleware.js";

import {
  deleteProduct,
  getMultipleProducts,
  getProduct,
  insertProduct,
  updateProductById,
} from "../models/product/ProductModel.js";
const route = express.Router();

// multer is middleware to support formData or uploading files
import multer from "multer";
const fileStoragePath = "public/img/products";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    cb(error, fileStoragePath);
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

      const images = files.map((img) => img.path.substr(7));
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

route.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const products = _id
      ? await getProduct({ _id })
      : await getMultipleProducts();

    res.json({
      status: "success",
      message: "Products Lists",
      products,
    });
  } catch (error) {
    next(error);
  }
});

route.delete("/:_id", async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const { _id } = req.params;

    const products = await deleteProduct(_id);
    products?._id
      ? res.json({
          status: "success",
          message: "Product has been delete successfully.",
        })
      : res.json({
          status: "error",
          message: "Error, unable to delete it a product",
        });
    res.json({
      status: "success",
      message: "Products Lists",
      products,
    });
  } catch (error) {
    next(error);
  }
});

route.patch(
  "/",
  upload.array("newImages", 5),
  updateProductValidation,
  async (req, res, next) => {
    try {
      console.log(req.body);
      const { _id, ...rest } = req.body;
      const newImages = req.files;

      const newImagePath = newImages.map((img) => img.path.substr(7));
      const oldImgLinks = rest.images.split(",");
      rest.images = [...newImagePath, ...oldImgLinks];

      const product = await updateProductById(_id, rest);

      product?._id
        ? res.json({
            status: "success",
            message: "the product has been update",
          })
        : res.json({
            status: "error",
            message: "Unable to update the product and try again later",
          });
      // attach incomig req.body.images path to image property and send data to te server
      console.log(images, data);
      res.json({
        status: "success",
        message: "todo",
      });
    } catch (error) {}
  }
);
export default route;
