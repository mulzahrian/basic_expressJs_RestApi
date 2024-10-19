const Dbpool = require("../config/database");

const getAllUser = () => {
  const SQLQuery = "SELECT * FROM users";
  return Dbpool.execute(SQLQuery);
};

module.exports = {
  getAllUser,
};
