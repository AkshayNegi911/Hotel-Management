import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bookedFor: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  adults: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  payMethod: {
    type: String,
    required: true,
  },
});

const bookingModel = mongoose.model("booking", bookingSchema);
export default bookingModel;
