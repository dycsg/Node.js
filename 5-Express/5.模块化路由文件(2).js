
// 这是路由文件模块
const express = require('express')

// 创建路由模块
const router = express.Router()

// 挂载具体的路由
router.get('/user/list', (req, res)=>{
    res.send('dyc')
})
router.post('/user/list', (req, res)=>{
    res.send('zyq')
})

// 向外导出路由模块
module.exports = router