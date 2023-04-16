// 导入数据库模块
const mysql = require('mysql')

// 创建连接关系
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_db_01'
})











// 向外共享数据库连接对象
module.exports = db