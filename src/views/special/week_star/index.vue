<template>
    <div class="ws_wrap">
        <header class="ws_header">周星榜统计周期为每周一00:00:00 到周日23:59:59</header>
        <main class="ws_content">
            <section class="rank_wrap">
                <div class="rank_tabs clearfix">
                    <a href="javascript:;" class="tab tab_anchor" v-bind:class="{ active: isActive }" @click="switchTab"></a>
                    <a href="javascript:;" class="tab tab_rich" v-bind:class="{ active: !isActive }" @click="switchTab"></a>
                </div>
                <div class="rank_content">
                    <div class="header">
                        <h1 class="title" v-bind:class="{ if_anchor_rank: isActive }"></h1>
                        <ul class="tabs">
                            <li class="tabs_li active"><a href="javascript:;" data-type="thisWeek" @click="switchWeek">本周</a></li>
                            <li class="tabs_li"><a href="javascript:;" data-type="lastWeek" @click="switchWeek">上周</a></li>
                            <li class="tabs_li"><a href="javascript:;" data-type="wednesday" @click="switchWeek">周三</a></li>
                        </ul>
                    </div>
                    <img class="rank_left_bg" src="./images/rank_left.png" alt="">
                    <img class="rank_right_bg" src="./images/rank_right.png" alt="">
                    <ul class="rank_items" v-show="isActive">
                        <li v-for="item in rankAnchors" :key="item.uid" class="rank_item">
                            <div class="item_block rank_gift">
                                <img class="gift_avatar" :src="item.giftPcImg" alt="">
                                <div class="gift_name_wrap">
                                    <span class="gift_name">{{ item.giftName }}</span><br>
                                    <span class="gift_count">本周获得 x {{ item.giftNum }}个</span>
                                </div>
                            </div>
                            <div class="item_block rank_anchor">
                                <i class="level_icon" :class="getLevelClass(item.level, true)"></i>
                                <span class="anchor_name">{{ item.nickname }}</span>
                                <i class="live_status_icon" v-bind:class="{ living: item.statusInLive === 1 }"></i>
                            </div>
                        </li>
                    </ul>
                    <ul class="rank_items" v-show="!isActive">
                        <li v-for="item in rankRichs" :key="item.uid" class="rank_item">
                            <div class="item_block rank_gift">
                                <img class="gift_avatar" :src="item.giftPcImg" alt="">
                                <div class="gift_name_wrap">
                                    <span class="gift_name">{{ item.giftName }}</span><br>
                                    <span class="gift_count">本周获得 x {{ item.giftNum }}个</span>
                                </div>
                            </div>
                            <div class="item_block rank_anchor">
                                <i class="level_icon" :class="getLevelClass(item.level, false)"></i>
                                <span class="anchor_name">{{ item.nickname }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        <footer class="ws_footer">
            <!-- <button class="btn btn_open_app" @click="tuneUpApp">打开千帆App</button> -->
        </footer>
    </div>
</template>

<script>
    // require('src/assets/less/components/level_icon.less');

    // import $ from 'zepto';
    import Vue from 'vue';
    // import utils from 'common/utils/1.0.x';
    // import openApp from 'common/open_app/1.0.x';
    // import shareWeixin from 'common/share_weixin/1.0.x';
    // import shareQq from 'common/share_qq/1.0.x';

    export default {
        data () {
            return {
                msg: '主播周星排行版',
                params: {
                    weekly: 0,
                    starType: 1
                },
                rankAnchors: [],
                rankRichs: [],
                isActive: true
            };
        },
        mounted () {
            this.initRank();
            this.initShare();
        },
        methods: {
            initRank: function () {
                this.getRankData();
            },
            getRankData: function () {
                var _this = this;
                Vue.http.jsonp('//qf.56.com/activity/star/rank.do', { params: this.params }).then(function (response) {
                    if (_this.isActive) {
                        _this.rankAnchors = response.body.message.data;
                    } else {
                        _this.rankRichs = response.body.message.data;
                    }
                }, function (response) {
                    console.error(response);
                });
            },
            switchTab: function (e) {
                this.isActive = !this.isActive;
                if (!this.isActive) {   // 切换到富豪周星榜
                    if (this.rankRichs.length === 0) {
                        this.params.starType = 0;
                        this.getRankData();
                    }
                } else {   // 切换到主播周星榜

                }
            },
            switchWeek: function (e) {
                var $targetType = e.target.innerText;
                if (this.isActive) { // 主播周星榜的tab下切换
                    if ($targetType === 'thisWeek') {

                    } else if ($targetType === 'lastWeek') {

                    } else {

                    }
                }
            },
            getLevelClass: function (level, isAnchorLevel) {
                var className = isAnchorLevel ? 'anchor_lvl lvl_' + level : 'rich_lvl lvl_' + level;
                return className;
            },
            initShare: function () {
                // if (utils.platform().isWechat()) {
                //     shareWeixin.initShare({
                //         title: '周星',
                //         link: location.href,
                //         imgUrl: '//file.qf.56.com/f/h5/style/special/beauty_match/img/test.png',
                //         desc: '周星活动'
                //     });
                // } else if (utils.platform().isQQ()) {
                //     shareQq.init({
                //         title: '周星',
                //         url: location.href,
                //         pic: 'file.qf.56.com/f/h5/style/special/beauty_match/img/test.png',
                //         summary: '周星活动'
                //     });
                // }
            },
            tuneUpApp: function (e) {
                // if (utils.platform().isIOS()) {
                //     openApp.openIOS(null, true, 1500);
                // } else {
                //     openApp.openAndroid({
                //         obj: $(e.currentTarget),
                //         downloadURL: null,
                //         time: null,
                //         roomId: null,
                //         cb: null
                //     });
                // }
            }
        }
    };
</script>

<style lang="less">
    @import '../../../assets/less/index.less';
    @import "./index.less";
</style>
