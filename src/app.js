import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// we have to set limit so that set max limit of json in server
app.use(express.json({ limit: "16kb" }));
// url uses their own encoding like space is converted to %20 like that
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// store static files like favicon in public folder in server
app.use(express.static("public"));
// In order to set and read cookie from browser (CRUD)
app.use(cookieParser());

export { app };
