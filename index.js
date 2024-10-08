import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();

//mongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
app.get("/", function (req, res) {
  res.send("first");
});

//middlewares
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://vsbookingapp.onrender.com",
      "https://vsbookingapp-frontend.onrender.com",
      "https://vs-booking-app.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 505;
  const errMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errMessage,
    stack: err.stack,
  });
});

//to start nodejs server
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
