import Vue from 'vue';
import VueResource from 'vue-resource';
import Index from './index.vue';

Vue.use(VueResource);

new Vue({
    ...Index
}).$mount('#app');
