<template>
    <div class="posts-list">
        <ul>
            <li v-for="item in topics" :key="item.id">
                <router-link :to="{ name: 'topic', params: { id: item.id } }">
                    <div class="content">
                        <img class="avatar inline-block" :src="item.avatar_url">
                        <div v-text="item.title" class="info inline-block"></div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import utils from 'src/common/utils';

    export default {
        name: 'list',
        props: ['topics'],
        data () {
            return {
                msg: '列表'
            }
        },
        mounted () {
            console.log('render list')
            // 滚动加载
            $(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
        },
        methods: {
            // 滚动加载数据
            getScrollData() {
                if (this.scroll) {
                    let totalheight = parseInt($(window).height(), 20) + parseInt($(window).scrollTop(), 20);
                    if ($(document).height() <= totalheight + 200) {
                        // this.scroll = false;
                        // this.searchKey.page += 1;
                        // this.getTopics();
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
