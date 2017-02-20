const router = require('koa-router');
const view = require('../controller/controller');

//路由处理，首页指定用index函数处理，但需要先经过validate函数校验
var API = new router();

API.get('/api/', view.index)
   .get('/api/getQQNewsDetail/', view.detail)
   .get('/api/getQQNewsIndexAndItems/', view.list)

exports.RULE  = API.middleware();
