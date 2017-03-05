/**
 * 页面标题更新
 */
import Vue from 'vue';

Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = binding.value;
    }
});
