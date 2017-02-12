import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
// import User from './views/user'
// import UserEdit from './views/user_edit'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: {
            template: '<div><router-view></router-view></div>'
        }
        // children: [{
        //     path: '',
        //     component: User
        // }, {
        //     path: 'edit',
        //     component: UserEdit
        // }]
    }]
})
