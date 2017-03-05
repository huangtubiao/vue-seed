/**
 * touch
 */
import Vue from 'vue';

Vue.directive('touch', {
    bind: function (el, binding, vnode) {
        let fnc = binding.value;
        fnc();
    },
    update: function (value, oldValue) {

    }
});
