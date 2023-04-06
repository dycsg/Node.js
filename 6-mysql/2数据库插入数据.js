// 导入数据库模块
const mysql = require("mysql");
// 建立MySQL数据库连接关系
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "my_db_01",
});

// 要插入到 uanem表的数据对象
const user = { username: "lcf", password: "312617" };
// 要执行的sql命令 ?表示占位符
const sqlStr = "insert into uname (username, password) values (?, ?)";
// 插入数据 这里放三个参数

db.query(sqlStr, [user.id, user.username, user.password], (err, results) => {
  // 失败 err
  if (err) return console.log(err.message);
  // 成功 results
  if (results.affectedRows === 1) {
    // 可以通过affectedRows
    console.log("插入数据成功");
  }
});

// 比上面更简单的写法

// 要插入到 uanem表的数据对象
const dyc = { username: "lr", password: "520" };
// 要执行的sql命令 ?表示占位符                  简单写法的核心   set ?
const zyq = "insert into uname set ?";

db.query(zyq, dyc, (err, results) => {
  // 失败
  if (err) return console.log(err.message);
  // 成功
  if (results.affectedRows === 1) {
    console.log("数据插入成功");
  }
});
