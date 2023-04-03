// 导入模块
const express = require("express");
// 创建服务器
const app = express();

// 15文件的post请求 解析
app.use(express.urlencoded({ extended: false }));


// 一定要在路由之前配置cors这个中间件 从而解决跨域问题   (文件16)
const cors = require('cors');
app.use(cors())



// 导入路由模块   （文件15)
const router = require("./15apiRouter路由模块文件(2)");

// 把路由模块注册到app上
app.use("/api", router);

// 启动
app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
