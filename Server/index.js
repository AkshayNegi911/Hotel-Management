import express from "express";
import { connectToMongoDB } from "./utils/index.js";
import cors from "cors";
import mongoose from "mongoose";
import roomRoutes from "./routes/roomRoute.js";
import Decoration from "./controllers/Decoration.js";
import dotenv from "dotenv";
import decorationRoutes from "./routes/decorationRoute.js";
import bookingRoutes from "./routes/bookingRoute.js";

dotenv.config();

const app = express();
app.use(express.json()); // we write this to get req.body in JSON format

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "DELETE"],
  })
);

app.use("/api/decoration", decorationRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT || 5000, async () => {
  console.log("Server Running on PORT: " + (process.env.PORT || 5000));
  connectToMongoDB(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("connected to MONGODB");
  });
});
