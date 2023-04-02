const fs = require('fs')
// __dirname当前文件所处在的目录
fs.readFile(__dirname + './files/1.txt', 'utf8', function(err, dataStr){

    if(err){
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功'+ dataStr);
})