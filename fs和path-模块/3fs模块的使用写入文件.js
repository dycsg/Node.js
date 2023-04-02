const fs = require('fs')
// 第一个是文件路径

// 第三个参数就是要写入的数据

// __dirname当前所处的内容
fs.writeFile(__dirname + './files/2.txt' ,'hello node.js', function(err){
    // 成功 null
    console.log(err);
})