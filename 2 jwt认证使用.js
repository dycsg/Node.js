// 先安装包： npm i       npm i jsonwebtoken     npm i express-jwt       npm i cors       npm i body-parser

// 导入模块
const express = require("express");
// 创建实例
const app = express();

// 1.导入jwt相关的两个包    jwt将用户信息加密生成token字符串    expressJWT 将加密后的信息转化成json字符串
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

// 允许跨域资源请求 curs
const cors = require("cors");
app.use(cors());

// 解析post 表单数据的中间件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// 2.定义 secret 密钥  建议命名为secretKey    是token三大部分组成的前面部分
const secretKey = "dyczyqlove^_^" //值随便写

// 4. 将加密后的还原成JSON对象中间件   secret既可以加密也跨域解密     unless路径以api不需要访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));
// 配置了这个中间件就可以解析出来用户信息 挂载到req.user属性上

// 登录接口
app.post("/api/login", (req, res) => {
  // 将req.body 请求体中的数据 转存为userinfo
  const userinfo = req.body;
  // 登录失败
  if (userinfo.username !== "admin" || userinfo.password !== "123456") {
    return res.send({
      status: 400,
      massage: "登录失败！",
    });
  }
  // 登录成功 生成jwt字符串
  // 3.在登录成功之后 调用jwt.sign() 方法生成jwt字符串 并通过token属性发送给客户端
  // 有三个参数：3.1用户的信息对象
  // 3.2加密的密钥                                                上面定义好了的secretKey
  // 3.3当前配置对象的token的有效期                               过了有效期就没有用了
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: "30s" });
  // 不要把密码加密到token中
  res.send({
    status: 200,
    message: "登录成功！",
    token: tokenStr, //要发送给客户端的token字符串
  });
});

// 有权限的api接口
app.get("/admin/getinfo", (req, res) => {
  // 5.使用req.user获取用户信息,并使用data属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: "获取用户信息成功",
    data: req.user //要发送给客户端的信息
  });
});


// 使用全局错误中间件处理 捕获解析jwt失败后产生的错误
app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError'){
    return res.sned({
      status: 401,
      message: '无效的token'
    })
  }
  res.sned({
    status: 500,
    message: '未知的错误'
  })
});


// 启动
app.listen(8888, () => {
  console.log("jwt server at http://127.0.0.1:8888  ");
});
