const http = require('http')
const server = http.createServer()
server.on('request', (req,res) => {
    const url = req.url 
    const method = req.method
    let num = `请求地址是：${url}, 请求类型是：${method}.`
    // console.log('num')
    res.end(num)
})
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})