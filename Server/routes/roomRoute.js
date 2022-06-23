// const Router = require("express").Router();
// const Room = require("../controllers/Room.js");
// const RoomModel = require("../models/RoomModels");
import Room from "../controllers/Room.js";
import RoomModel from "../models/RoomModels.js";
import express from "express";

const Router = express.Router();

// (async function () {
//   await RoomModel.create({
//     // this create's a document
//     type: "Single",
//     isFeatured: true,
//     description: "analijnraionr",
//     image: "",
//     services: [],
//     price: 100,
//     max: 2,
//     datesBooked: [],
//   }).then((e) => {
//     console.log(e);
//   });
// })();

Router.get("/all", Room.all);
Router.get("/get/:id", Room.get);
Router.post("/create", Room.add);
Router.delete("/delete/:id", Room.delete);
Router.put("/update/:id", Room.update);

// module.exports = Router;
export default Router;
