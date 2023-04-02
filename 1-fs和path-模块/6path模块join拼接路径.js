const path = require('path')

// 注意：../覆盖删除前面一层的路径
const lj = path.join('/a', '/b/c', '../', '/d')

console.log(lj);

// 今后涉及到路径拼接的操作 都要使用 path.join()