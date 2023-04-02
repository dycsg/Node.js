const express = require("express");
const app = express();

const mw = (req, res, next) => {
  console.log("这是局部中间件函数");
  next();
};

app.get("/", mw, (req, res) => {
  //在这里加一个中间间函数
  res.send("dyc");
});
app.get("./", (req, res) => {
  res.send("zyq");
});

app.listen(8000, () => {
  console.log("at http://127.0.0.1:8000");
});

// 不使用app.use的就是局部中间件
