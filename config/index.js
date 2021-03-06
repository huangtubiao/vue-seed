// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
    // production 环境
    build: {
        // 使用 config/prod.env.js 中定义的编译环境
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),   // 编译输入的 index.html 文件
        // 编译输出的静态资源根路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: 'http://file.qf.56.com/f/',
        // 是否开启 cssSourceMap
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 是否开启 gzip
        productionGzip: false,
        // 需要使用 gzip 压缩的文件扩展名
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    // dev 环境
    dev: {
        // 使用 config/dev.env.js 中定义的编译环境
        env: require('./dev.env'),
        // 运行测试页面的端口
        port: 9001,
        // 是否自动打开浏览器
        autoOpenBrowser: true,
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        // 需要 proxyTable 代理的接口（可跨域）
        proxyTable: {
            '/mockApi/': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/mockApi': ''
                }
            },
            '/api/': {
                target: 'http://10.10.92.111',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        // 是否开启 cssSourceMap
        cssSourceMap: false
    },
    mock: {
        // 使用 config/mock.env.js 中定义的编译环境
        env: require('./mock.env')
    }
}
