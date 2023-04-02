// 写入内容writeFile
const fs = require('fs')
// 第三个参数就是要写入的数据
// __dirname当前文件所处的内容
fs.writeFile(__dirname + './files/2.txt' ,'丁扬财nb', function(err){
    if(err){
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功');
})