// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'

import router from 'routers'
import store from './store'

VuexRouterSync.sync(store, router)

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount('#app');
