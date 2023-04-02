// 导入模块
const express = require('express')


// 创建 express()
const app = express()


// 监听请求类型 get post和响应内容   res响应对象 
app.get('/user', (req, res)=>{
    //     向客户端发送JSON对象
    res.send({name: 'zyq', age: 18, gender: '男'})
})

app.post('/user', (req, res)=>{
    //     向客户端发送文本内容
    res.send('请求成功！')
})

app.get('/', (req, res)=>{
    // req.query可以获取到客户端发送过来的查询参数
    // 他的默认情况是一个空对象 ?name="zyq"&age="18"
    console.log(res.query);
    res.send(req.query)
})

app.get('/:id', (req, res)=>{
    // :后面的是一个动态参数 查询到他的动态参数 地址栏后面填的是1返回的就是1 可以有多个动态参数
    console.log(req.query);
    res.send(req.query)
})

// 启用服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})