import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由注册
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: resolve => require(['views/home/index.vue'], resolve)
    }, {
        path: '/list',
        name: 'list',
        component: resolve => require(['views/home/index.vue'], resolve)
    }, {
        path: '/room/:id',
        name: 'room',
        component: resolve => require(['views/room/index.vue'], resolve)
    }, {
        path: '/activity',
        name: 'activity',
        component: resolve => require(['components/frame/activity.vue'], resolve),
        children: [{
            path: 'valentine',
            name: 'activity.valentine',
            component: resolve => require(['views/activity/valentine/index.vue'], resolve)
        }, {
            path: 'weekStar',
            name: 'activity.weekStar',
            component: resolve => require(['views/activity/week_star/index.vue'], resolve)
        }]
    }, {
        path: '*',
        redirect: '/'
    }]
});

export default router;
