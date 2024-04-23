import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const dbConnect = () => {
  connect(
    process.env.MONGO_URL!
  ).then(
    () => console.log("Database is connected successfully"),
    (err) => console.log(err)
  );
};
