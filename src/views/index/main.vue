<template>
    <div v-title="'千帆直播 - 最酷的自媒体视频直播平台'">
        <header-logo></header-logo>
        <navbar></navbar>
        <section id="page" v-scroll="loadMoreData">
            <!-- 首页列表 -->
            <ul class="anchors_list clearfix">
                <li v-for="item in anchors" :key="item.uid">
                    <router-link :to="{ name: 'room', params: { id: item.roomid } }">
                        <img class="avatar inline-block" :src="item.pic51">
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import headerLogo from 'components/header';
    import navbar from 'components/nav';
    import anchorsService from 'services/anchorsService';

    export default {
        name: 'index',
        data () {
            return {
                anchors: [],
                searchKey: {
                    index: 0,
                    size: 12,
                    type: 0,
                    page: 1
                }
            };
        },
        mounted () {
            this.getAnchors();
        },
        methods: {
            getAnchors () {
                anchorsService.getAnchors(this.searchKey).then((response) => {
                    if (this.anchors.length === 0) {
                        this.anchors = response.body.message.anchors;
                    } else {
                        var newAnchors = response.body.message.anchors;
                        this.anchors = [...this.anchors, ...newAnchors];
                    }
                });
            },
            loadMoreData () {
                this.searchKey.page = this.searchKey.page + 1;
                this.getAnchors();
            }
        },
        watch: {
            // 切换路由触发
            '$route' (to, from) {
                if (to.query && to.query.type) {
                    this.searchKey.type = to.query.type;
                    this.anchors = [];
                }
                this.getAnchors();
            }
        },
        components: { navbar, headerLogo }
    };
</script>

<style lang="less">
    @import '../../assets/less/index.less';
    
    #app {
        background-color:#fff;
        text-align: center;
        transition: all .3s ease;
    }

    .anchors_list {
        li {
            margin: 0;
            margin-left: 2%;
            margin-right: 2%;
            margin-bottom: 2%;
            float: left;
            width: 47%;
            text-align: left;
            .avatar {
                width: 100%;
                border-radius: 4px;
            }
            &:nth-child(even) {
                margin-left: 0;
            }
        }
    }
</style>
