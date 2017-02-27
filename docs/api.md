## Api说明

## 关于后台响应以及错误响应的说明

成功信息放在响应体（Response Body）里，返回格式如下：

```
{
    message: "成功信息"，
    status：200
}
```

错误的信息放在响应体（Response Body）里，返回格式如下：

```
{
    errmsg: "错误信息"
}
```

## 数据交换格式的支持

后端服务器需要支持请求体（Request Body）的三种编码，可从请求头的 `Content-Type` 获取。

```
application/json（主要用于ajax 提交，必须支持）
application/x-www-form-urlencoded（表单提交）
multipart/form-data（主要用于文件提交）
```

一般情况下，除非特别说明，Response Content-Type 全部为 `application/json`。

## 域名和接口说明

开发环境：[localhost:3001](localhost:3001)
测试环境：[]()
生产环境：[http://qf.56.com/](http://qf.56.com/)
