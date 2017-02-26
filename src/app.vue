<template>
    <div>
        <header-logo></header-logo>
        <navbar></navbar>
        <section id="page">
            <!-- 首页列表 -->
            <ul class="anchors-list">
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
    import headerLogo from 'src/components/header';
    import navbar from 'src/components/tab';
    import anchorsService from 'src/services/anchorsService';

    export default {
        name: 'index',
        data () {
            return {
                anchors: [],
                searchKey: {
                    index: 0,
                    size: 12,
                    type: 0,
                    tab: 'all'
                }
            };
        },
        mounted () {
            if (this.$route.query && this.$route.query.tab) {
                this.searchKey.tab = this.$route.query.tab;
            }
            this.getAllAnchors();
        },
        methods: {
            getAllAnchors () {
                anchorsService.getAllAnchors(this.searchKey).then((response) => {
                    this.anchors = response.body.message.anchors;
                });
            },
            getFocusAnchors () {
                anchorsService.getFocusAnchors(this.searchKey).then((response) => {
                    this.anchors = response.body.message.anchors;
                });
            }
        },
        watch: {
            // 切换路由触发
            '$route' (to, from) {
                if (to.query && to.query.tab) {
                    this.searchKey.tab = to.query.tab;
                    this.anchors = [];
                }
                if (to.query.tab === 'focus') {
                    this.searchKey.type = 1;
                    this.getFocusAnchors();
                } else {
                    this.searchKey.type = 0;
                    this.getAllAnchors();
                }
            }
        },
        components: { navbar, headerLogo }
    };
</script>

<style lang="less">
    @import './assets/less/index.less';

    #app {
        background-color:#fff;
        text-align: center;
        transition: all .3s ease;
    }

    .anchors-list {
        display: flex;
        flex-wrap: wrap;
        li {
            padding: 5px 5px;
            text-align: left;
            width: 50%;
            .avatar {
                width: 100%;
                border-radius: 4px;
            }
        }

    }
</style>
