import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const PORT = process.env.PORT || 8000;

// use middleware
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// connect to db
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();
// api
import registerLoginRouter from "./src/routers/registerLoginRouter.js";
app.use("/api/v1/register-login", registerLoginRouter),
  app.get("/", (req, res) => {
    res.json({
      message: "you reach a e-commerce api",
    });
  });

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 404;
  res.json(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${8000}`);
});
