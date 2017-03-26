# qf_h5_vue

> 基于 Vue.js + webpack 的项目框架

## 技术栈

- Vue2
- vue-router2
- Vuex
- webpack2
- ES6 + Babel
- Scss
- Eslint

## Dependences

- node^7.2.0
- npm^4.0.5

## Build Setup

``` bash
# 安装依赖
npm install

# 启动服务，代理mock数据，打开链接 http://qfvue.56.com:9001
npm run start

# 启动服务，代理测试环境的数据，打开链接 http://qfvue.56.com:9001
npm run dev

# 发布代码
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

在dev环境下，需要启动mock server来加载数据，进入"./mock"目录，按照README的命令步骤来启动服务。

[重点：在开发之前，请认真阅读项目开发注意事项和相关规范（./docs/）](http://git.tv.sohuno.com/frontend/qf_h5_webpack/tree/master/docs)
