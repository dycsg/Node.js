# Node.js
fs模块
readFile()读取   writeFile()写入

path模块
join()拼接路径 涉及到路径拼接都要使用它   basename()可以在最后获得路径中的文件名   extname()获取路径文件扩展名

http模块
http.createServer() 创建服务器            on(request,回调函数)           启动服务器.listen(端口号，回调函数)

<!-- 快速新建 package.json 包管理工具文件 -->
<!-- npm init -y -->
<!-- dependencies 记入安装好的包 项目上线前会用到-->
<!-- npm i 可以一次性安装项目所要的包 会先读取package.json文件 查看项目所依赖的包 -->
<!-- uninstall 卸载包 -->
<!-- deDependencies 记入项目上线后还需要 使用的包  -->
<!-- npm install -D -->
<!-- 一般项目上线后不会用到dependencies节点的包
    但是会使用deDendencies节点的包 -->
    <!-- 解决下载慢问题 -->
    <!-- 查看当前下载包的镜像源 -->
    npm config get registry
    将下载包的镜像源切换为淘宝镜像源  再查看是否切换成功
    npm config set registry=https://registry.npm.taobao.org/
    

    模块加载机制
    <!-- require() 先加载的的文件夹-js文件-json文件-node文件 -->

    <!-- express中间件 (req, res, next) 就是回调函数  -->