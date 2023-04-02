// 创建服务器 导入模块
const http =require('http')
const server = http.createServer()
server.on('request', (req, res)=>{
    // 获取url地址
    const url = req.url
    // 错误响应内容
    let content = '<h1>404 Not Found!</h1>'
    // 判断url地址
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    } else if(url === '/demo.html'){
        content = '<h1>关于页面</h1>'
    }
    // 解决乱码
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    // 响应到客户端
    res.end()
})
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})