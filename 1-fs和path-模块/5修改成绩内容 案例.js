// 导入fs 读取文件
const fs = require('fs')
// __dirname表示当前文件所处的内容
fs.readFile(__dirname + './files/成绩.txt', function(err, dataStr){
    if(err){
        return console.log('读取文件失败' + err.message);
    }
    // 读取文件成功
    // split()把字符串分隔成数组
    const arrOrd = dataStr.split(' ')
    // 对每一项进行替换操作
    const arrNew = []
    // 循环
    arrOrd.foreach(item => {
        // 添加 替换
        arrNew.push(item.replace('=', '：'))
    })
    // console.log(arrNew);
    const newStr = arrNew.join('\r\n')
    // console.log(newStr);

    fs.writeFile('./files/成绩-ok.js', newStr, function(){
        if(err){
            return console.log('读取文件失败'+ err.message);
        }
        console.log('写入文件成功');
    })
})