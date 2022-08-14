import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const PORT = process.env.PORT || 8000;
import path from "path";

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
import categoriesRouter from "./src/routers/categoriesRouter.js";
import paymentMethod from "./src/routers/paymentMethod.js";
import adminRouter from "./src/routers/adminRouter.js";
import { adminAuth } from "./src/middlewares/authMiddleware.js";
import productRouter from "./src/routers/productRouter.js";
import orderRouter from "./src/routers/OrderRouter.js";

app.use("/api/v1/register-login", registerLoginRouter),
  app.use("/api/v1/category", adminAuth, categoriesRouter);
app.use("/api/v1/paymentMethod", adminAuth, paymentMethod);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/product", adminAuth, productRouter);
app.use("/api/v1/orders", adminAuth, orderRouter);

// server public folder as static folder

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

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
    : console.log(`server is running at http://localhost:${8000}`);
});
