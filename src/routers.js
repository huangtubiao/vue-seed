import Vue from 'vue'
import VueRouter from 'vue-router'

// import routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: resolve => require(['src/views/home/index.vue'], resolve),
        children: [
            {
                path: '/profile',
                name: 'home.profile',
                meta: {
                    requiresAuth: true
                },
                component: resolve => require(['views/account/profile.vue'], resolve)
            }, {
                path: '/login',
                name: 'home.login',
                component: resolve => require(['views/account/login.vue'], resolve)
            }, {
                path: '/logout',
                name: 'home.logout',
                component: resolve => require(['views/account/logout.vue'], resolve)
            }, {
                path: '/activity',
                name: 'activity',
                component: resolve => require(['views/activity/valentine/index.vue'], resolve)
            }
        ]
    }, {
        path: '*',
        redirect: '/'
    }]
})

export default router
