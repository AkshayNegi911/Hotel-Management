// const { default: mongoose } = require("mongoose");
// const moongoose = require("mongoose");
import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  type: { type: String, required: true },
  isFeatured: { type: Boolean, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  services: { type: Array, required: true },
  price: { type: String, required: true },
  max: { type: Number, required: true },
  datesBooked: { type: Array, required: true },
});

const RoomModel = mongoose.model("room", RoomSchema);
export default RoomModel;
