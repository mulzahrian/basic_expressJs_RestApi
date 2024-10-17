const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.METHOD(PATH, HANDLER);
// app.method(path, handler);

app.use("/home", (req, res, next) => {
  res.send("Hellow Ari Ganteng");
});

app.get("/getData", (req, res) => {
  res.json({
    nama: "Mulzahrian",
    alamat: "Jakarta Selatan",
    kampus: "binus",
  });
});

app.post("/postData", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
