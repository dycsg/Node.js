/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 导入数据库模块
const db = require("../db/index");
// 导入 用于加密数据库密码的包
const bcrypt = require("bcryptjs");

// 用户注册的处理函数
exports.regUser = (req, res) => {
  const userinfo = req.body;
  // 接收表单数据
  if (!userinfo.username || !userinfo.password) {
    res.send({ status: 1, message: "用户名或密码不能为空！" });
  }

  // 定义sql语句
  const sqlStr = "select * from ev_users where username=?;";
  db.query(sqlStr, [userinfo.username], function (err, results) {
    // 执行失败
    if (err) {
      // return res.send({ status: 1, message: err.message });
      // 调用了app.js 优化
      return res.cc(res) 
    }
    // 判断用户名是否被占用
    if (results.length > 0) {
      return res.sned({
        status: 1,
        message: "用户名被占用，请更换其他用户名！",
      });
    }
  });
  //   res.send("reguser OK");
  // 调用bcrypt.hashSync() 对密码进行加密
  // console.log(userinfo);
  userinfo.password = bcrypt.hashSync(userinfo.password, 10);
  // console.log(userinfo);

  // 定义插入新用户的sql语句
  const sql = "insert into ev_users set ?;";
  // 调用db.query()执行sql语句
  db.query(
    sql,
    { username: userinfo.username, password: userinfo.password },
    (err, results) => {
      // 执行失败
      // if (err) return res.send({ status: 1, message: err.message });
      if(err) return res.cc(err)
      // 判断影响行数是否为1
      if (results.affectedRows !== 1)
        return res.send({ status: 1, message: "注册用户失败，请稍后再式！" });
      // 执行成功
      res.send({ status: 0, message: "注册成功！" });
    }
  );
};

// 登录的处理函数
exports.login = (req, res) => {
  res.send("login OK");
};
