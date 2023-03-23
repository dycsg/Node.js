const path = require('path')

// 定义路径
const lj = '/a/b/c/index.html'

// basename(路径，扩展名)

const name = path.basename(lj)
// console.log(name);  //index.html


// 如果不需要扩展名就给它第二个参数

const names = path.basename(lj, '.html')
console.log(names);  //index