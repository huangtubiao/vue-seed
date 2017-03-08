# 项目开始

## 目录结构

- [目录结构（最佳实践）](./structrue.md)



## 代码规范

- [规范](./spec.md)



## Api使用

- [Api说明](./api.md)



## 终端适配

适配方案我们使用了手淘H5的Flexible终端适配方案：

- [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)



## px转rem方案

我们使用了postcss-px2rem插件进行自动px转rem，因此我们就可以像开发PC页面一样，直接使用px单位就行。

- [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)


## 兼容说明

- [兼容说明](./compatible.md)



## 开发

### 功能页面开发

一般的新业务页面开发，我们在src/views目录下进行新建页面开发。该页面对应的
service、store分别在services、store目录下按照对应的规范进行新建。

### 活动页的开发

对于专题页的页面的开发，我们统一在src/views/activity目录下进行新建页面开发。



## 代码提测和发布流程
