const express = require("express");
const app = express();

// 注意 除了错误级别的中间件 其他的中间件 都是放在路由的前面
// 通过express.json()这个中间件 解析服务器的json格式数据
app.use(express.json());
// 通过express.urlencoded()这个中间件 解析服务器的url-encoded格式数据
app.use(express.urlencoded({ extended: false }));

// 定义路由
app.post("/", (req, res) => {
  // 在服务器，可以使用req.body这个属性， 来接收客户端发送过来的数据
  // 默认情况下，如果不配置解析数据的中间件json() ,则req.body默认等于undefined
  console.log(req.body);
  res.send("ok");
});

// 定义路由
app.post("/book", (req, res) => {
  // 在服务器，可以使用req.body这个属性， 来接收客户端发送过来的数据
  // 默认情况下，如果不配置解析数据的中间件url-encoded() ,则req.body默认等于{}
  console.log(req.body);
  res.send("ok");
});

app.listen(8000, () => {
  console.log("express server running at http://127.0.0.1:8000");
});
