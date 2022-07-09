import express from "express";
import {
  categoryValidation,
  updateCategoryValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createCategory,
  deleteCategoryByIds,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "../models/adminUser/CategoryModel.js";
import slugify from "slugify";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getCategoryById(_id) : await getCategories();
    res.json({
      status: "success",
      message: "here are the categories",
      result,
    });
  } catch (error) {
    next(error);
  }
});
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

router.put("/", updateCategoryValidation, async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await updateCategoryById(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "The category has been updated",
        })
      : res.json({
          status: "success",
          message: "Error, unable to add the data",
        });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { ids } = req.body;
    const result = await deleteCategoryByIds(ids);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "The category has been deleted",
        })
      : res.json({
          status: "success",
          message: "Error, unable to delete the data",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
