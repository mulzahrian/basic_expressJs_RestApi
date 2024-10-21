require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const logsMiddleWare = require("./middleware/logs");
const upload = require("./middleware/multer");

app.use(logsMiddleWare);
app.use(express.json());
app.use("/assets", express.static("public/image"));

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload Success!",
  });
});
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
    status: 401,
  });
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
