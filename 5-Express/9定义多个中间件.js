const express = require("express");
const app = express();

// 定义中间件
const mw = (req, res, next) => {
  console.log("定义多个中间件1");
  next();
};
const mw1 = (req, res, next) => {
  console.log("定义多个中间件2");
  next();
};

app.get("/", [mw, mw1], (req, res) => {
  res.send("dyc");
});

app.get("/", mw, mw1, (req, res) => {
  res.send("zyq");
});

app.listen(8000, () => {
  console.log("at http://127.0.0.1");
});

// 想要定义多个中间件 就要在请求的里面第二次参数 加[]中括号里面写中间件

// mw, mw1,
// [mw, mw1]
// 这两种方法都可以
// 中间件 注意事项 见img文件夹
