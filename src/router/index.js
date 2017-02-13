import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: resolve => require(['src/components/layout/main.vue'], resolve),
        children: routes
    }, {
        path: '*',
        redirect: '/'
    }]
})

export default router
