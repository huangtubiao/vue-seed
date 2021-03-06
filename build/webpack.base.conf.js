var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
var entries = utils.getEntry('./src/views/**/*.js'); // 获得入口js文件

// 拼接我们的工作区路径为一个绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: Object.assign(entries, {
        vendors : ['flexible', 'zepto']
    }),
    output: {
        // 编译输出的根路径
        path: config.build.assetsRoot,
        // 编译输出的文件名
        filename: '[name].js',
        // 正式发布环境下编译输出的发布路径
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        // 自动补全的扩展名
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'store': resolve('src/store'),
            'services': resolve('src/services'),
            'components': resolve('src/components'),
            'directives': resolve('src/directives'),
            'common': resolve('src/common'),
            flexible: resolve('src/libs/flexible.min.js')
        }
    },
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: "pre",
            include: [resolve('src'), resolve('test')],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        },{
            test: require.resolve('zepto'),
            loader: 'exports-loader?window.Zepto!script-loader'
        }]
    }
}
