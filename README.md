# 新建一个webpack+vue新建一个todo项目
webpack为自动构建工具
vue mvvm框架
##### 1.使用npm init初始化一个项目
##### 2.使用npm install 安装webpack(此处用的webpack版本为@3.10.0) vue vue-loader(注意要安装依赖包)

> ps：npm install在安装npm包时,有两种命令参数可以把它们的信息写入package.json文件
> npm install --save会将依赖包添加到devdependencies键下,
> npm install --save-dev会将依赖包添加到devDependencies键下
> devDependencies是开发时的依赖
##### 3.新建一个webpack.config.js配置相关参数
##### 4.在package.json中配置build
> 利用webpack 启动webpack.config.js
##### 5.安装webpack-dev-server  webpack-dev-server是一个webpack的包。是用在开发环境的包
配置webpack-dev-serve
在package.json里面添加
"dev": "webpack-dev-server --config webpack.config.js"

添加一个全局变量 target: 'web' 代表这个程序是运行在浏览器上的

##### 6.安装一个插件:cross-env
此时,需要一个标识,看此时是开发环境还是正式环境

在不同的平台上,标识的方法是不同的
在mac上
"build": "NODE_ENV=production webpack --config webpack.config.js"
在windows可能需要set的方式来写

使用cross-env插件可以在不同平台执行同一个脚本
```
"build": "cross-env NODE_ENV=production webpack --config webpack.config.js"
"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
```

在webpack.config.js里面判断当前是开发环境还是正式环境
设置一个全局变量
```
const isDev = process.env.NODE_ENV === 'development'
module.exports = config // 将module.exports赋值给其他变量,方便在开发环境扩展module.exports的属性
if(isDev) {
    // 如果当前是开发环境,则需要扩展一些属性
    config.devServer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            error: true
        },
        // historyFallback: {
            // 单页应用,会有很多请求路由
        //},
        hot: true // 改了页面的代码,只会重新渲染这个组件
    }
}
```
##### 7.安装各种插件
添加hot:true时,需要在plugins里面添加一个插件
new webpack.HotModuleReplacementPlugin

让浏览器能显示页面添加插件
html-webpack-plugin
webpakc配置
new htmlWebpackPlugin

我们使用react、vue这些框架的时候,一定要使用一个插件
```
new webpack.DefinePlugin({
'process.env': {
   NODE_ENV: isDev？'"development"': '"production"'
}
})
```
// 这个用来在webpack编译的过程中,判断环境

##### 8.安装loader
postcss 后处理器,用来给css添加浏览器前缀
需要安装postcss-loader autoprefixer
vue处理jsx 使用babel-loader babel-core
在根目录需要创建.babelrc和.postcss.config.js两个文件
postcss.config.js文件写法
````
const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer()
        ]
}

.babelrc配置
{
"presets": [
    "env"
    ],
"plugins": [
    "transform-vue-jsx"
    ]
}
````
除此之外还需要安装包 babel-preset-env babel-plugin-transform-jsx