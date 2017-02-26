<template>
    <div class="qf-tabs">
        <nav class="navbar">
            <ul class="title-list">
                <li v-for="(tab, index) in tabs" v-bind:class="{ active: tab.isActive }">
                    <a :data-tab="index" :data-key="tab.label" @click="switchTab">{{ tab.text }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data () {
            return {
                tabs: [{
                    label: 'all',
                    text: '全部主播',
                    isActive: true
                }, {
                    label: 'focus',
                    text: '高颜值',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '萌妹子',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '好声音',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '有才艺',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '小鲜肉',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '逗B/MC',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '劲爆',
                    isActive: false
                }, {
                    label: 'focus',
                    text: '还有更多',
                    isActive: false
                }]
            };
        },
        methods: {
            switchTab: function (e) {
                let hightLightIndex = parseInt(e.target.dataset.tab);
                let tab = e.target.dataset.key;
                this.tabs.map(function (tab, index) {
                    if (index === hightLightIndex) {
                        tab.isActive = true;
                    } else {
                        tab.isActive = false;
                    }
                });
                this.$router.push({path: 'list', query: { tab: tab }});
            }
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
