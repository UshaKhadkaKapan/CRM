import express from "express";
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
