// 导入 文件系统模块 路径处理模块 服务器模块
const fs = require('fs')
const path = require('path')
const http = require('http')
// 创建服务器
const server = http.createServer()

// 监听服务器 
server.on('request', (req, res)=>{
    // 获取客户端url地址
    const url = req.url

    // 把请求的url地址映射为具体文件存储路径  方便用户不用输入文件夹路径 麻烦 
    // 定义空的文件路径 
    let fpath = ''

    if (url === '/'){
        fpath = path.join(__dirnames, '/demo/index.html')
    }else{
        fpath = path.join(__dirname, '/demo', url)
    }

    // 读取文件 路径 fpath
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 判断是否读取失败
        if (err) return res.end('404 Not Found')
        // 成功 响应到客户端
        res.end(dataStr)
    })
})

// 启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})

// 读取失败是因为没有加地址 加上/index.html