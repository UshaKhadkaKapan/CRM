import express from "express";
import { createNewUser } from "../models/clientUser/clientUserModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
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
