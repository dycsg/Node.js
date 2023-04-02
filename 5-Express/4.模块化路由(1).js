const express = require("express");
const app = express();

// 导入路由模块
const route = require("./Express/4.模块化路由文件(2).js");
// 使用app.use()注册路由模块
app.use(route);

// 统一挂载前缀
app.use('/api',route);

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
