// 1导入模块
const http = require('http')

// 2创建web服务器实例
const server = http.createServer()
// 3为服务器绑定 on('事件名称request', 回调函数)事件 监听客户端的请求
server.on('request', (req, res) => {
    console.log('Someone visit our web server. 有人访问了')
})
// 4启动服务器
server.listen(8080, function () {
    console.log('server running at http://172.0.0.1:8080')
})