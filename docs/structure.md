# 目录结构（最佳实践）

```
|-- build                            // webpack配置文件
|-- config                           // webpack配置文件
|-- docs                             // 项目规范文档
|-- mock                             // mock数据
|-- src                              // 源码目录
|   |-- assets                       // 公众静态资料目录
|       |-- fonts                    // iconfont
|       |-- images                   // 公共图片
|       |-- less                     // 公共样式
|   |-- common                       // 公共方法
|       |-- constant                 // 变量
|       |-- libs                     // 类库
|       |-- utils                    // js方法
|   |-- components                   // 组件
|       |-- list                     // list组件
|       |-- footer                   // 底部公共组件
|       |-- header                   // 头部公共组件
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|   |-- services                     // 数据交互统一调配
|       |-- cgi_path                 // 接口path
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

以下是针对其中的模块进行讲解：

## 公共组件components

components里放置的是公共组件，每个组件有自己独立的文件夹，里面包含.vue文件和组件的images等静态资源文件夹。这样的好处是，可以在组件内部管理自己的html结构、样式和逻辑和静态资源。components的结构如下：

```
├── components
    ├── com1  # 组件1
        ├── images    # 静态资源：图片
        ├── com1.scss # style
        └── com1.vue  # template/script
    ├── com2  # 组件1
        ├── images   # 静态资源：图片    
        └── com2.vue # template/style/script
```


## 指令directives

directives文件夹中不同指令的具体逻辑，和一个统一的入口index.js，index是所有指令的入口，方便在app.js中注册。index.js的代码如下：

```
import directive1 from './directive1';
import directive2 from './directive2';
export default {
    ...directive1,
    ...directive2
}
```


## 状态管理store（vuex）

store（vuex）使用的是官方推荐的项目结构，modules里面是各模块的js文件。


## 服务层services

services下面根据模块，将所有API封装成方法，返回的是promise对象，在要用的地方直接调用方法就可以了。

## 页面views

views按模块划分，模块下面有页面，页面里面有静态资源和组件。结构如下:

```
├── views
    ├──  module1  # 模块1
    │     ├── page1   # 页面   
    │          ├── components   # 页面 
               │   ├── com1
               │       ├── images    // 组件1的静态资源
               │       ├── com1.scss # style
               │       └── com1.vue  # template/script
               ├── page1.scss # style
               └── page1.vue  # template/script
```

