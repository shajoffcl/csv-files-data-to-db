const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    rollNumber: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('csv-file-collections', schema);
