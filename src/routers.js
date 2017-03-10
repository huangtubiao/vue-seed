import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由注册
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: resolve => require(['views/index/main.vue'], resolve)
    }, {
        path: '/list',
        name: 'list',
        component: resolve => require(['views/index/main.vue'], resolve)
    }, {
        path: '/room/:id',
        name: 'room',
        component: resolve => require(['views/room/index.vue'], resolve)
    }]
});

export default router;
