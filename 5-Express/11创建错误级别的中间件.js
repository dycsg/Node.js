// 有四个形参 (err, req, res, next)

// 导入模块
const express = require("express");
// 创建服务器
const app = express();

// 定义路由
app.get("/", (req, res) => {
  console.log("这是错误级别的中间件");
  // 入为的制造错误
  throw new Error("服务器内部发生错误！");
  res.send("cw");
});

// 定义错误中间件
app.use((err, req, res, next) => {
  console.log("发生了错误" + err.message);
  res.send("Erorr: " + err.message);
});

// 启动
app.listen(8000, () => {
  console.log("express server running at http://127.0.0.1:8000");
});



// 作用：捕获项目的异常错误，从而防止程序的崩溃
// 注意事项 所有错误中间件必须放在路由的后面


// 就不是这个网页了
// Error: 服务器内部发生错误！
//     at D:\DW试用\set-\Node.js\5-Express\11创建错误级别的中间件.js:10:9
//     at Layer.handle [as handle_request] (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\layer.js:95:5)
//     at next (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\route.js:144:13)
//     at Route.dispatch (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\route.js:114:3)
//     at Layer.handle [as handle_request] (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\layer.js:95:5)
//     at D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\index.js:284:15
//     at Function.process_params (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\index.js:346:12)
//     at next (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\index.js:280:10)
//     at expressInit (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\middleware\init.js:40:5)
//     at Layer.handle [as handle_request] (D:\DW试用\set-\Node.js\5-Express\node_modules\express\lib\router\layer.js:95:5)
