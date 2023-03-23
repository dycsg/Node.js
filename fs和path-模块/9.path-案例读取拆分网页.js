// 导入模块
const fs = require('fs')
const path = require('path')

// 定义正则 匹配style script  \s\S 非空字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, './files/index.html'), function(err, dataStr){
    if(err){
        // 读取失败
        return console.log(err.message + '读取文件失败');
    }
    // 读取成功 调用函数
    resloveCSS(dataStr)
    resloveJS(dataStr)
    resloveHTML(dataStr)
})


// 定义提取css方法
function resloveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    // 提取到的数据进行拼接
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 写入文件
    fs.writeFile(path.join(__dirname, './files/index.css', newCSS, function(err){
        if(err) return console.log(err.message + '文件写入失败！');

        console.log('css文件写入成功！');
    }))
}


// 定义提取js方法
function resloveJS(htmlStr){
    const r2 = regScript.exec(htmlStr)
    // 提取到的数据进行拼接
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 写入文件
    fs.writeFile(path.join(__dirname, './files/index.js'), newJS,(err)=>{
        if(err) return console.log('写入文件失败' + err.message);

        console.log('js文件写入失败');
    })
}


// 定义提取html方法
function resloveHTML(htmlStr) {
    // 将style标签和script标签替换成 外联形式
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./files/index.css').replace(regScript, '<script src="./files/index.js"></script>')
    
    // 写入文件
    fs.writeFile(path.join(__dirname, './indexhtml'), newHTML, function(err){
        if(err) return console.log('html文件写入失败' + err.message);
    })
}   