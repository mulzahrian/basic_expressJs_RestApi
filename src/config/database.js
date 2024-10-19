const mysql = require("mysql2");
const Dbpool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express_mysql",
});

module.exports = Dbpool.promise();
