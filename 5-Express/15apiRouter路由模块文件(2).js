const express = require("express");
const router = express.Router();

// 在这里挂载对应路由
// 定义get接口
router.get("/get", (req, res) => {
  // 获取到客户端通过查询字符串，发送到服务器的数据
  const query = req.query;

  // 1调用res.send()方法 把数据响应给客户端
  res.send({
    status: 0, //0 表示成功 1表示失败 状态码
    msg: "get请求成功", //状态描述
    data: query, //需要响应给客户端的具体数据
  });
});
// 先拿到客户端响应到服务器的数据 再原封不动的返回给客户端

// 定义post接口
router.post("/post", (req, res) => {
  // 获取到 req.body 请求体中的url-encoded格式数据
  const body = req.body;
  // 调用res.send 向客户端响应结果
  res.send({
    status: 1, // 状态码 0 成功 1 失败
    msg: "Post请求成功", // 状态描述
    data: body, // 响应的结果
  });
});
// 使用post请求时 必须加 app.use(urlencoded({ extended: false}))




// 定义delete接口
router.delete("/delete", (req, res) => {
  res.send({
    status: 0, //
    msg: "Delete请求成功",
  })
});



// 暴露到外面
module.exports = router;
