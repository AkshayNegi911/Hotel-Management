import bookingModel from "../models/BookingModel.js";

class Booking {
  static async add(req, res) {
    await bookingModel.create(
      {
        first_name: req.body.first_name || "null",
        last_name: req.body.last_name || "null",
        phone: req.body.phone || "null",
        mail: req.body.mail || "null",
        room: req.body.room || "null",
        bookedFor: req.body.bookedFor || "null",
        children: req.body.children || "null",
        adults: req.body.adults || "null",
        payMethod: req.body.payMethod || "null",
      },
      (err, room) =>
        res.status(201).json({
          status: true,
          room: room,
          error: err,
        })
    );
  }
}

export default Booking;
