// 若项目不使用 jQuery，而引入第三方 Ajax 请求库（如 Superagent）
// 请别忘了将其添加到 build/webpack.base.conf.js 的 entry.vendor 分离打包

var xhr = require('./ajax').default
