const db = require("../config/sql.db");

class Model {
  static insertData(data) {
    const rollNumber = data.rollNumber;
    const name = data.name;
    const branch = data.branch;
    const address = data.address;
    const sql =
      "insert into CSV_Files_Data(rollNumber, name, branch, address) values (?, ?, ?,?)";
    return new Promise((resolve, reject) => {
      db.query(
        sql,
        [rollNumber, name, branch, address],
        async (err, result) => {
          if (!err) {
            return resolve(result);
          } else {
            return reject(err);
          }
        }
      );
    });
  }
}

module.exports = Model;
