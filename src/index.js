const express = require("express");
const app = express();
const port = 3000;

const usersRoutes = require("./routes/users");
const logsMiddleWare = require("./middleware/logs");

app.use(logsMiddleWare);
app.use(express.json());

app.use("/users", usersRoutes);

app.use("/", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
