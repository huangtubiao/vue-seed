var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap :
            config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [
        require('autoprefixer')({
            browsers: ['last 2 versions']
        }),
        // 配置px转rem
        require('postcss-px2rem')({remUnit: 34.5})
    ]
}

// http://vue-loader.vuejs.org/en/
