const routes = [
    {
        path: '',
        component: resolve => require(['views/home'], resolve)
    }, {
        path: '/profile',
        meta: {
            requiresAuth: true
        },
        component: resolve => require(['views/account/profile.vue'], resolve)
    }, {
        path: '/login',
        component: resolve => require(['views/account/login.vue'], resolve)
    }, {
        path: '/logout',
        component: resolve => require(['views/account/logout.vue'], resolve)
    }
]

export default routes
