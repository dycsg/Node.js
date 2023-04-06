// 导入模块
const express = require("express");
const session = require("express-session");

// 实例化
const app = express();

// 配置session中间件
app.use(
  session({
    secret: "secret", //值随便写
    resave: false, //固定写法
    saveUninitialized: true, //固定写法
  })
);

// 托管静态页面
app.use(express.static("./ZY"));
// 解析
app.use(express.urlencoded({ extended: false }));

// 登录的api接口
app.use("./api/login", (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== "admin" || req.body.password !== "123456") {
    return res.send({ status: 1, msg: "登录失败" });
  }

  // 将登录成功后的用户信息 保存到session中
  // 注意：只有成功配置了express-session这个中间件才能调用req 点出来session这个属性
  req.session.user = req.body; // 用户信息       user随便写   user就是键     req.body就是值   
  req.session.islogin = true; // 用户的登录状态    islogin随便写

  // 否则
  res.send({ status: 0, msg: "登录成功" });
});


// 获取用户姓名的接口
app.get('api/username', (req, res) => {
    // 判断是否登录了
    if(!req.session.islogin){
        // 没有登录
        res.send({ status: 1, msg: 'file' })
    }
    // 登录了返回数据
    res.send({
        status: 0,     //0表示这次请求成功1表示失败
        msg: 'seccess',
        username: req.session.user.username
        
    })
    // 试一下打印
    // console.log(req.session.user.username);
})


// 退出登录的接口       
app.post('api/logout', (req, res) => {
    // 清空session 信息   调用destroy()方法  只会清空当前的session
    req.session.destroy()

    res.send({
        status: 0,       //0表示这次请求成功1表示失败
        msg: '退出登录成功'
    })

})

// 启动
app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
