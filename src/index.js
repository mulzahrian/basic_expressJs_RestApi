const express = require("express");
const app = express();
const port = 3000;

const usersRoutes = require("./routes/users");
const logsMiddleWare = require("./middleware/logs");

app.use(logsMiddleWare);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
