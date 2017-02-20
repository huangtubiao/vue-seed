// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import VueResource from 'vue-resource';

import router from 'routers';
import store from './store';

VuexRouterSync.sync(store, router);
Vue.use(VueResource);

new Vue({
    router,
    store
}).$mount('#app');
