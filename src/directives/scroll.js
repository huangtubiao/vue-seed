export default {
    bind (el, binding) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                let fnc = binding.value;   
                fnc();
            }
        });
    },
    update: function (value, oldValue) {

    }
};
