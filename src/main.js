import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import VueResource from 'vue-resource';

import router from 'routers';
import store from './store';
import scroll from './directives/scroll';

VuexRouterSync.sync(store, router);
Vue.use(VueResource);

// 注册指令
Vue.directive('scroll', scroll);

new Vue({
    router,
    store
}).$mount('#app');
