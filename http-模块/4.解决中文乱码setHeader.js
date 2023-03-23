const http = require('http')
const server = http.createServer()
server.on('request', (req,res)=>{
    const unm =  `请求地址是：${req.url}, 请求类型是：${req.method}.`
    // 解决乱码setHeader 
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res的作用
    res.end(unm)
    
})
server.listen(80, ()=>{
    console.log('srever running at http://127.0.0.1')
})


// 导入模块
// const http = require('http')
// const server = http.createServer()
// server.on('request', (erq,res)=> {
//     const unm = `请求地址是${req.url}, 请求类型是${req.method}.`
//     // 解决中文乱码
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end(unm)
// })
// 监听端口80，并在回调函数中输出服务器运行地址
// server.listen(80 , ()=> {
//     console.log('server running at http://127.0.0.1')
// })

