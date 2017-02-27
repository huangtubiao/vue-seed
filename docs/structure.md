# 目录结构（最佳实践）

```
|-- build                            // webpack配置文件
|-- config                           // webpack配置文件
|-- docs                             // 项目规范文档
|-- mock                             // mock数据
|-- src                              // 源码目录
|   |-- assets                       // 组件
|       |-- fonts                    // iconfont
|       |-- images                   // 公共图片
|       |-- less                     // 公共样式
|   |-- components                   // 组件
|       |-- list                     // list组件
|       |-- footer                   // 底部公共组件
|       |-- header                   // 头部公共组件
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|   |-- services                     // 数据交互统一调配
|       |-- cgi_path                 // 
|       |-- xhr                      // 获取数据的统一调配文件，对接口进行管理
|       |-- anchorsService.js        // 主播数据接口服务
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|   |-- views                        // 页面组件
|       |-- activity                 // 活动页
|       |-- room                     // 直播间页
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|   |-- routers.js                   // 路由配置
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .eslintignore                    // ESLint 忽略检测配置文件
|-- .eslintrc.js                     // ESLint 静态检测配置文件
|-- .gitignore                       // 忽略的Git提交文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```
