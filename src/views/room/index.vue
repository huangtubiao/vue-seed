<template>
    <div v-title="'JD小明的直播间'">
        <div class="room_wrap">
            <div class="play_bg">
                <div class="bg_shadow"></div>
            </div>
            <room-header></room-header>
            <play></play>
            <chat></chat>
            <section class="interact_btns">
                <button class="talk">聊天</button>
                <button class="send_gift">送礼</button>
                <button class="send_star">星星</button>
            </section>
            <div class="play_tip"></div>
        </div>
        <!-- 大家都在看组件 -->
        <recommend></recommend>
        <!-- 打开App组件 -->
        <div class="open_app">
            <button class="btn btn_open_app">打开千帆直播，与更多主播实时聊天互动</button>
        </div>
    </div>
</template>

<script>
    import roomHeader from 'components/room_header';
    import play from 'components/play';
    import chat from 'components/chat';
    import recommend from 'components/recommend';

    export default {
        name: 'room',
        data () {
            return {

            };
        },
        mounted () {
        },
        components: { roomHeader, play, chat, recommend }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
