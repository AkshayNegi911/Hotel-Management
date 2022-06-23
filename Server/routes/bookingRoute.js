import Booking from "../controllers/Booking.js";
import express from "express";
const Router = express.Router();

Router.post("/add", Booking.add);
export default Router;
