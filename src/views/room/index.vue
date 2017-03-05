<template>
    <div v-title="'房间'">
        <div class="play_wrap">
            <!-- <div class="play_bg">
                <div class="bg_shadow"></div>
            </div> -->
            <!-- 播放页头部组件 -->
            <section class="play_info">
                <img src="" alt="">
                <div class="info_anchor">
                    <span class="nickname">Na娜看潮起潮落</span>
                    <div>房间号：<span class="room_id"></span></div>
                </div>
                <div class="info_online">
                    在线数：
                    <span>2000</span>
                </div>
                <button class="btn_open_app">打开千帆直播</button>
            </section>
            <!-- 播放器组件 -->
            <section class="play_video">
                <div class="video_wrap">
                    <video src=""></video>
                </div>
                <div class="video_rest"></div>
                <div class="video_btn"></div>
            </section>
        </div>
        <!-- 大家都在看组件 -->
        <section class="recommend"></section>
        <!-- 打开App组件 -->
        <section class="open_app"></section>
    </div>
</template>

<script>
    export default {
        name: 'room',
        data () {
            return {
                
            };
        },
        mounted () {
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
