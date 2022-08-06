import express from "express";
const route = express.Router();

route.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "New product has been added ",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
