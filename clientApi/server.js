import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const PORT = process.env.PORT || 5000;

// middlewares

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

import { mongoConnect } from "./src/dbconfig/dbconfig.js";
mongoConnect();

import userRouter from "./src/routers/userRouter.js";

app.use("/api/v2/user-register", userRouter);
app.get("/", (req, res) => {
  res.json({
    message: "you reach a e-commerce api",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${5000}`);
});
