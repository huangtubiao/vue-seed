import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from 'vuex/dist/logger'
import * as actions from './actions';
import * as getters from './getters';

import account from './modules/account';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        account: account
    },
    strict: false
    // plugins: debug ? [createLogger()] : []
});

export default store;
