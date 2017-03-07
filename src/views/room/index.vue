<template>
    <div v-title="'房间'">
        <div class="play_wrap">
            <!-- <section class="play_bg">
                <div class="bg_shadow"></div>
            </section> -->
            <!-- 播放页头部组件 -->
            <section class="play_info">
                <img src="https://file.qf.56.com/p/group3/M10/F7/F6/MTAuMTAuODguODQ=/dXBsb2FkRmlsZV8xXzE0ODA3NzExMjk5ODc=/cut@m=crop,x=0,y=0,w=1242,h=1242_cut@m=resize,w=100,h=100.jpeg" alt="">
                <div class="info_anchor">
                    <span class="nickname">Na娜看潮起潮落</span>
                    <div class="room_num">房间号：<span class="room_id">123456</span></div>
                </div>
                <div class="info_online">
                    在线数：
                    <span>2000</span>
                </div>
                <button class="btn btn_open_app">打开千帆直播</button>
            </section>
            <!-- 播放器组件 -->
            <section class="play_video">
                <div class="video_wrap">
                    <video src=""></video>
                </div>
                <div class="video_rest"></div>
                <div class="video_play">
                    <i></i>
                </div>
                <div class="video_loading"></div>
            </section>
            <!-- 聊天区组件 -->
            <section class="play_chat"></section>
            <!-- 交互组件 -->
            <section class="play_control">
                <button class="btn_talk" type="button" name="button">聊天</button>
                <button class="btn_gift" type="button" name="button">送礼</button>
                <button class="btn_star" type="button" name="button">星星</button>
            </section>
            <!-- 提示组件 -->
            <section class="play_tip"></section>
        </div>
        <!-- 大家都在看组件 -->
        <section class="recommend">
            <div class="recommend_title">
                <span>大家都在看</span>
                <button class="btn_flash" type="button" name="button">换一批</button>
            </div>
            <div class="recomend_content">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </section>
        <!-- 打开App组件 -->
        <section class="open_app">
            <button class="btn btn_open_app" type="button" name="button">打开千帆直播，与更多主播实时聊天互动</button>
        </section>
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
