const Model = require("../models/nosql.model");
const fileReader = require("../utils/csvFileReader");

class NoSqlController {
  
  welcome(req, reply) {
    return "no-sql routes working succesfully.";
  }

  async upload(req, reply) {
    try {
      if (req.file) {
        const path = req.file.path;
        const values = await fileReader(path);
        values.forEach(async (value) => {
          await Model.create(value);
        });
        reply.status(200).send("Upload Succesfully");
        return;
      }
      reply.status(400).send("File does not match or exist.");
    } catch (err) {
      reply.status(500).send(err);
    }
  }
}

module.exports = new NoSqlController();
