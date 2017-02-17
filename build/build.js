// https://github.com/shelljs/shelljs
// 检查 Node 和 npm 版本
require('./check-versions')()

process.env.NODE_ENV = 'production'

// 一个很好看的 loading 插件
var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

// 使用 ora 打印出 loading + log
var spinner = ora('building for production...')
// 开始 loading 动画
spinner.start()

// 拼接编译输出文件路径
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
// 删除这个文件夹 （递归删除）
shell.rm('-rf', assetsPath)
// 创建此文件夹
shell.mkdir('-p', assetsPath)
shell.config.silent = true
// 复制 static 文件夹到我们的编译输出目录
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

//  开始 webpack 的编译
webpack(webpackConfig, function(err, stats) {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
})
