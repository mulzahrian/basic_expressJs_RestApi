const Dbpool = require("../config/database");

const getAllUser = () => {
  const SQLQuery = "SELECT * FROM users";
  return Dbpool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (nama,email,tempat) 
                    VALUE ('${body.nama}','${body.email}','${body.tempat}')`;
  return Dbpool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE users SET nama='${body.nama}',email='${body.email}',tempat='${body.tempat}'
                    WHERE id=${id}`;
  return Dbpool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  return Dbpool.execute(SQLQuery);
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
