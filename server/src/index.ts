import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import { dbConnect } from "./configs/databaseConfig";

import userRouter from "./routes/user";
dbConnect();
const app = express();
app.use(
  cors()
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", userRouter);

app.listen(8080, () => {
  console.info(`App running on port 8080`);
});
