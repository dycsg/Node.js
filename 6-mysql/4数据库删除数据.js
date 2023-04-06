// 导入模块
const mysql = require("mysql");
// 建立连接
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "my_db_01",
});

// 删除id为11的数据
// 要执行的qsl命令 ?占位符
const sqlStr = "delete from uname where id=?";

// (sqlStr, 11, (err, results)) 如果sql命令只有一个占位符 就可以不用定义 数组     直接写参数

// 删除操作
db.query(sqlStr, 11, (err, results) => {
  // 失败
  if (err) return console.log(err.message);
  // 成功
  if (results.affectedRows === 1) {
    console.log("删除数据成功");
  }
});

// 标记删除 当status为1的时候就 相当于删除了
// 要执行的sql命令
const dyc = "update uname set status=? where id=?";

db.query(dyc, [1, 9], (err, results) => {
  // 失败
  if (err) return console.log(err.message);
  // 成功
  if (results.affectedRows) {
    console.log("标记删除成功");
  }
});
