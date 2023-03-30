// 把ZY文件夹托管到服务器
// 1导入模块
const express = require('express')

// 2创建服务器
const app =express()

// 在这里，调用express.static(文件夹)方法 快速向外提供静态资源 拼接路径就好了
app.use(express.static('./ZY'))
// 如果想要托管多个静态资源再写一个就好了  
// 注意他有先后顺序 同时托管会先调用前面的
app.use(express.static('./ZY2'))

// 使用前缀 拼接路径就必须添加前缀
app.use('/ZY',express.static('./ZY'))
// 3启动服务器
app.listen(3000, ()=>{
    console.log('express server running at http://127.0.0.1:3000');
})