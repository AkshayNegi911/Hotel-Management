import Decoration from "../controllers/Decoration.js";
// const Decoration = require("../controllers/Decoration.js");
import express from "express";
// const Router = require("express").Router();
const Router = express.Router();

Router.get("/images", Decoration.slider_images);
export default Router;
// module.exports = Router;
