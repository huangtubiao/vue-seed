/**
 * 启动入口
 */
import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import VueResource from 'vue-resource';

import router from 'routers';
import store from 'store';
import directives from 'directives';
import Main from 'components/frame/main.vue';

VuexRouterSync.sync(store, router);
Vue.use(VueResource);

new Vue({
    router,
    store,
    directives,
    ...Main
}).$mount('#app');
