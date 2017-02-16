<template>
    <div>
        <navbar></navbar>
        <!-- <img src="../assets/images/logo.png"> -->
        <section id="page">
            <!-- 首页列表 -->
            <ul class="posts-list">
                <li v-for="item in topics" :key="item.id">
                    <router-link :to="{ name: 'topic', params: { id: item.id } }">
                        <div class="content">
                            <img class="avatar inline-block" :src="item.avatar_url">
                            <div v-text="item.title" class="info inline-block"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    require('./assets/scss/index.scss')

    import navbar from 'src/components/layout/navbar'
    import topicsData from 'src/services/topics'
    import topicsService from 'src/services/topicsService'

    export default {
        name: 'index',
        data () {
            return {
                topics: this.getTopics()
            }
        },
        mounted () {
            console.log('欢迎！')
            // 滚动加载
        },
        methods: {
            // 获取主题数据
            getTopics () {
                setTimeout(() => {
                    topicsService.getList().then((response) => {

                    }, (response) => {

                    })
                    this.topics = topicsData
                }, 2000)
            }
        },
        components: { navbar }
    }
</script>

<style>
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

    .posts-list li {
        padding: 10px 15px;
        border-bottom: 1px solid #d5dbdb;
    }

    .posts-list li .content {
        display: flex;
    }

    .posts-list li .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        border: 1px solid #f3f3f3;
        vertical-align: middle;
    }

    .posts-list li .info {
        line-height: 40px;
    }
</style>
