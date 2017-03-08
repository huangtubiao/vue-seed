<template>
    <section class="recommend">
        <div class="header">
            <span>大家都在看</span>
            <button class="flash_anchors">换一批</button>
        </div>
        <div class="content">
                <a v-for="recommendAnchor in recommendAnchors" :href="'/room/' + recommendAnchor.rid"
                :style="{ backgroundImage: 'url('+ recommendAnchor.pic74 +')' }"></a>
        </div>
    </section>
</template>

<script>
    import anchorsService from 'services/anchorsService';

    export default {
        name: 'recommend',
        data () {
            return {
                searchKey: {
                    size: 4
                },
                recommendAnchors: [],
                bg: '1234'
            };
        },
        mounted () {
            this.getRecommendAnchors();
        },
        methods: {
            getRecommendAnchors () {
                anchorsService.getRecommendAnchors(this.searchKey).then((response) => {
                    this.recommendAnchors = response.body.message.anchors;
                });
            }
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
