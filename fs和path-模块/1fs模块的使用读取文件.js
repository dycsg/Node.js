// 读取文件 readFile
// 导入fs模块
const fs = require('fs')
// __dirname当前文件所处在的目录
fs.readFile(__dirname + './files/1.txt', 'utf8', function(err, dataStr){
    // 成功
    console.log(err);
    console.log('--------------');
    // 失败
    console.log(dataStr);
})
// 读取错误 对象 和 undefined