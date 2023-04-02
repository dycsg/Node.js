const express = require("express");
const app = express();

// 定义第一个中间件  想要多次调用就用app.use
app.use((req, res, next) => {
  next();
});
// 定义第二个中间件
app.use((req, res, next) => {
  next();
});

// 定义路由
app.get("/", (req, res) => {
  res.send("dyc");
});

app.listen(8000, () => {
  console.log("at http://127.0.0.1:8000");
});
