/**
 * 滚动加载指令
 */
import Vue from 'vue';

Vue.directive('scroll', {
    bind: function (el, binding, vnode) {
        var timer = null;

        window.addEventListener('scroll', () => {
            // 延迟计算
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                    let fnc = binding.value;
                    fnc();
                }
            }, 50);
        });
    },
    update: function (value, oldValue) {

    }
});
