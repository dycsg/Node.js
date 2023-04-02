// 导模块
const http = require('http')
// 创建实例
const srever = http.createServer()
srever.on('request', (req) => {
    // 获取形参的请求地址
    const url = req.url
    const method = req.method
    // 拼接打印
    const str = `请求url地址是：${url}, 请求的方式是：${method}.}`
    console.log(str)

})
srever.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})


// req请求对象 访问客户端相关的数据或属性