// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VuexRouterSync from 'vuex-router-sync'

import App from './App'
// import store from './vuex'
import router from './router'

// VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App }
})
