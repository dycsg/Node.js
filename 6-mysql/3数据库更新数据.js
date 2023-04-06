// 导入模块
const mysql = require('mysql')
// 建立连接关系
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_db_01'
})



// 1要更新的数据
const dyc = { id: 12, username: 'lcf', password: '312617'}
// 2要执行的sql命令 ?占位符  set      记得添加where条件
const sqlStr = 'update uname set username=?, password=? where id=?'

// 3进行更新
db.query(sqlStr, [dyc.username, dyc.password, dyc.id], (err, results) => {
    // 失败
    if(err) return console.log(err.message);
    // 成功
    if(results.affectedRows === 1) {
        console.log('数据更新成功')
    }
})
// [dyc.username, dyc.password, dyc.id]   这里面的顺序一定要按步骤2 里面的命令 顺序一样



// 比上面更简单的写法

// 1要更新的数据
const data = { id: 13, username: 'lcf', password: '520'}
// 2要执行的sql命令 ?占位符  set      记得添加where条件  ?有多少个就自动添加上 再给个条件
const zyq = 'update uname set ? where id=?'

// 3进行更新
db.query(zyq, [data, data.id], (err, results) => {
    // 失败
    if (err) return console.log(err.message)
    // 成功
    if(results.affectedRows === 0){
        console.log('更新数据成功');
    } 
})