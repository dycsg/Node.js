// 下载数据库 npm i mysql
// 导入数据库
const mysql = require("mysql");

// 建立MySQL数据库连接关系
const db = mysql.createPool({
  host: "127.0.0.1", //ip地址
  user: "root", //账号
  password: "123456", //密码
  database: "my_db_01", //要操作的数据库名
});

// 测试连接 query(sql命令, 回调函数)
db.query("select * from my_db_01", (err, results) => {
  // 判断失败
  if (err) return console.log(err.message);
  //   成功
  console.log(results);
});
// 如果是select 查询命令 则返回的结果就是一个数组


