// 如果向要访问自定义模块的私有 变量 函数 。。可以使用module.exports
exports.age = 20   //变量

exports.username = 'dyc'   //属性

module.exports.hello = function(){     //方法
    console.log("Hello");
}

// 最终向外面共享的module.exports指向的对象 会覆盖
// 不要同时使用module.exports 和 exports