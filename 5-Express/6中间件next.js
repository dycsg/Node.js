const express = require("express");
const app = express();

// // 定义最简单的中间件函数 next 一定要加  相当于拦截器  如果遇到 就会先执行 执行完了 通过next() 让下一个执行
// // 1复杂写法
// const mw = function (req, res, next) {
//   console.log("这是最简单的中间件函数");
//   next();
// };
// // 定义全局生效的中间件
// app.use(mw);

// 2简化写法  只要看到next就是中间件函数
app.use((req, res, next) => {
  console.log("这是简化写法的中间件函数");
  next();
});

app.get("/", () => {
  res, send("dyc");
});
app.get("/", () => {
  res.send("zyq");
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
