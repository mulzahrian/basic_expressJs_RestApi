require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const logsMiddleWare = require("./middleware/logs");

app.use(logsMiddleWare);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
