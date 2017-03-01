<template>

</template>

<script>
    /**
     * 使用方法
     *
     * 请使用以下HTML嵌套方式
     * <Scroll>
     *      <List></List>
     *      <List></List>
     * </Scroll>
     *
     * 对象参数
     * prvScrollTop -> 当前列表上次滚动到的位置
     * wrapper -> 滚动对象
     * disable -> 停用
     * isEnd -> 列表到底
     *
     * 方法
     * props.loadDataForScroll -> 从上层组件传进来的拉取数据方法
     * 
     */
    import { platform } from 'src/common/utils/utils';

    export default {
        name: 'scroll',
        props: ['wrapper', 'disable', 'isEnd', 'loadDataForScroll'],
        data () {
            return {
                prvScrollTop: 0,
                timer: null
            };
        },
        mounted () {
            this.bindScroll();
        },
        methods: {
            bindScroll() {
                this.scrollContainer = (platform.ios) ? document.querySelector(this.wrapper) : window;
                this.scrollContainer.addEventListener('scroll', this.scrollEvt);
            },
            scrollEvt() {

                var isWindow = (this.scrollContainer === window);

                // 延迟计算
                this.timer && clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    if (this.disable || this.isEnd) {
                        return;
                    }

                    var scrollEle = (isWindow) ? this.scrollContainer.document : this.scrollContainer;
                    var scrollTop = (isWindow) ? 
                                    scrollEle.body.scrollTop
                                    : scrollEle.scrollTop;

                    // 防止向上滚动也拉数据
                    if (this.prvScrollTop > scrollTop) {
                        return;
                    }
                    this.prvScrollTop = scrollTop;

                    var containerHeight = (isWindow) ? scrollEle.documentElement.clientHeight : scrollEle.offsetHeight;
                    var scrollHeight = (isWindow) ? scrollEle.body.clientHeight : scrollEle.scrollHeight;        

                    // 条件一： 滚动到最底部才拉数据
                    // if (scrollTop + winHeight >= clientHeight) {
                    // 条件二： 滚动到中间拉数据
                    console.log(scrollTop, scrollHeight, containerHeight);

                    if (scrollTop >= (scrollHeight - containerHeight) / 2) {
                        this.loadDataForScroll && this.loadDataForScroll();
                    }

                }, 50); 


            }
        }

    };
</script>

<style lang="less">
    @import './index.less';
</style>
