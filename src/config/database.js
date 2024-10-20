const mysql = require("mysql2");
const Dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
});

module.exports = Dbpool.promise();
