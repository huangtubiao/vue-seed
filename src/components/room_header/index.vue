<template>
    <section class="room_header clearfix">
        <img class="avatar" :src="anchorInfo.avatar" alt="">
        <div class="info">
            <p class="nickname ellipsis">{{ anchorInfo.name }}</p>
            <p class="room_num">房间号：<span class="room_id">{{ anchorInfo.roomId }}</span></p>
        </div>
        <div class="online_count">
            在线数：
            <span>{{ anchorInfo.onlineCount }}</span>
        </div>
        <button class="btn btn_open_app">打开千帆直播</button>
    </section>
</template>

<script>
    export default {
        name: 'roomHeader',
        data () {
            return {
                anchorInfo: {
                    avatar: 'https://file.qf.56.com/p/group3/M10/F7/F6/MTAuMTAuODguODQ=/dXBsb2FkRmlsZV8xXzE0ODA3NzExMjk5ODc=/cut@m=crop,x=0,y=0,w=1242,h=1242_cut@m=resize,w=100,h=100.jpeg',
                    name: 'Na娜看潮起潮落',
                    roomId: 12345,
                    onlineCount: 20000
                }
            };
        },
        mounted () {
        },
        methods: {
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
