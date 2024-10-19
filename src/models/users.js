const Dbpool = require("../config/database");

const getAllUser = () => {
  Dbpool.execute("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.json({
        message: err,
        status: 400,
      });
    }
    res.json({
      message: "Execute database sucess!",
      status: 200,
      data: rows,
    });
  });
};
