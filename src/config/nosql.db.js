const fastifyPlugin = require("fastify-plugin");
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/files_container_db";

const mongoDbConnector = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database Connected.");
  } catch (err) {
    console.log("Unable to connect database", err);
  }
};

module.exports = fastifyPlugin(mongoDbConnector);
