import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: resolve => require(['src/app.vue'], resolve)
    }, {
        path : '/index',
        component : resolve => require(['src/app.vue'], resolve)
    }, {
        path: '/login',
        name: 'home.login',
        component: resolve => require(['views/account/login.vue'], resolve)
    }, {
        path: '/logout',
        name: 'home.logout',
        component: resolve => require(['views/account/logout.vue'], resolve)
    }, {
        path: '/topic/:id',
        name: 'topic',
        component: resolve => require(['views/topic/index.vue'], resolve)
    }, {
        path: '/activity',
        name: 'activity',
        component: resolve => require(['views/activity/valentine/index.vue'], resolve),
        children: []
    }, {
        path: '*',
        redirect: '/'
    }]
})

export default router
