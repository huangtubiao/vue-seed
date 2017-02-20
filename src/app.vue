<template>
    <div>
        <headerLogo></headerLogo>
        <navbar></navbar>
        <section id="page">
            <!-- 首页列表 -->
            <ul class="anchors-list">
                <li v-for="item in anchors" :key="item.uid">
                    <router-link :to="{ name: 'room', params: { id: item.roomid } }">
                        <div class="content">
                            <img class="avatar inline-block" :src="item.pic51">
                            <div class="info">
                                <div class="info-name" v-text="item.name"></div>
                                <div class="info-focus">
                                    观众数：<span v-text="item.focus"></span>
                                    <span class="info-live" v-if="item.live === 1">直播</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    require('./assets/less/index.less');

    import headerLogo from 'src/components/header';
    import navbar from 'src/components/tab';
    import anchorsService from 'src/services/anchorsService';

    export default {
        name: 'index',
        data () {
            return {
                anchors: [],
                searchKey: {
                    tab: 'all'
                }
            };
        },
        mounted () {
            if (this.$route.query && this.$route.query.tab) {
                this.searchKey.tab = this.$route.query.tab;
            }
            this.getTopics();
        },
        methods: {
            getTopics () {
                anchorsService.getList().then((response) => {
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
                    alert('我的关注');
                } else {
                    this.getTopics();
                }
            }
        },
        components: { navbar, headerLogo }
    };
</script>

<style lang="less">
    #app {
        color: #2c3e50;
        background-color:#fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        transition: all .3s ease;
        overflow-x:hidden;
    }

    .anchors-list {
        li {
            padding: 10px 15px;
            border-bottom: 1px solid #f3f3f3;
            a {
                color: initial;
            }
            .content {
                text-align: left;
            }
            .avatar {
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 10px;
                border: 1px solid #f3f3f3;
                vertical-align: middle;
            }
            .info {
                display: inline-block;
                vertical-align: middle;
            }
            .info-name {
                margin-bottom: 10px;
            }
            .info-live {
                margin-left: 8px;
                color: #cb9c64;
                border: 1px solid #cb9c64;
                border-radius: 2px;
            }
        }

    }
</style>
