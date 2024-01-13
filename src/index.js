import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERR: ", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed !!! ", err);
  });
