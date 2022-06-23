import mongoose from "mongoose";

const connectToMongoDB = async function (connection_string) {
  return mongoose.connect(connection_string);
};

export { connectToMongoDB };
