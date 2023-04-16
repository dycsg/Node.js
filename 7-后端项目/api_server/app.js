// 导入模块
const express = require("express");
// 实例化
const app = express();

// 解决跨域
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 一定要在路由之前 封装res.cc 函数
app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send(status, message.err instanceof Error ? err.message : err);
  };
  next();
});

// 导入并注册用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 启动服务器
app.listen(3007, () => {
  console.log("app server at http://127.0.0.1:3007");
});
