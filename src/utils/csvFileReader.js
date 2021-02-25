const csv = require("csv-parser");
const fs = require("fs");

const fileReader = (path) => {
  return new Promise((resolve, reject) => {
    let data = [];
    const readable = fs.createReadStream(path).pipe(csv());
    readable.on("data", (row) => {
      data.push(row);
    });
    readable.on("end", () => {
      resolve(data);
    });
    readable.on("error", () => {
      reject(err);
    });
  });
};

module.exports = fileReader;
