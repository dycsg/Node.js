// 先运行命令下载 npm i body-parser

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
