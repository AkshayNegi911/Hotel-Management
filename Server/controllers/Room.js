import { request, response } from "express";
import RoomModel from "../models/RoomModels.js";

class Room {
  // NOTE: WE MADE all FUN() static . so that we don't need to declare Room class object
  //   SINCE , static fun() can be called without decalring the class object in which they are declared
  /**
   * we wrote this for VS code syntax intellicence to know beforehand the type of req & res and also for docmuentation
   * @param {request} req
   * @param {response} res
   */
  static all(req, res) {
    // the 1st argument of RoomModel.find() tell what to find
    // the 2nd argument is the response we give
    RoomModel.find({}, (err, data) => Room.#response(res, err, data));
  }
  /**
   * this function give's us response
   * @param {response} res
   * @param {error} err
   * @param {json} data
   * @returns
   */
  static #response(res, err, data) {
    // '#' tells it's a private function
    if (err) return res.status(500).json({ err });
    return res.status(200).json(data);
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  static get(req, res) {
    const id = req.params.id;
    if (!id) return res.status(500).json({ err: "No id given" });
    // the 1st argument of RoomModel.find() tell what to find
    // the 2nd argument is the response we give
    RoomModel.findById(id, (err, data) => Room.#response(res, err, data));
  }

  /**
   *
   * @param {object} object
   */
  static #validateNoFalse(object) {
    const values = Object.values(object);
    const keys = Object.keys(object);

    for (let i = 0; i < keys.length; i++) {
      const value = object[keys[i]];

      if (!values) return false;
    }

    return true;
  }

  /**
   * function to create a document
   * @param {request} req
   * @param {response} res
   * @returns
   */
  static add(req, res) {
    // const isValid = Room.#validateNoFalse({ ...req.body });
    // if (!isValid)
    //   return res.json(500).json({ err: "All Room Values not provided" });
    console.log({ ...req.body });
    console.log(req.body);

    RoomModel.create({ ...req.body }, (err, data) =>
      Room.#response(res, err, data)
    );
  }

  static delete(req, res) {
    const ID = req.params.id;
    if (!ID) return res.status(500).json({ err: "No id given" });

    RoomModel.deleteOne({ _id: ID }, (err, data) =>
      Room.#response(res, err, data)
    );
  }

  static update(req, res) {
    const ID = req.params.id;
    if (!ID) return res.status(500).json({ err: "No id given" });

    RoomModel.findOneAndUpdate({ _id: ID }, req.body, (err, data) =>
      Room.#response(res, err, data)
    );
  }
}

export default Room;
