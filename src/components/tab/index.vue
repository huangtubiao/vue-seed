<template>
    <div class="qf-tabs">
        <nav class="navbar">
            <ul class="title-list">
                <li v-for="(tab, index) in tabs" v-bind:class="{ active: tab.isActive }">
                    <a :data-index="index" :data-type="tab.type" @click="switchTab">{{ tab.text }}</a>
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
                    type: '0',
                    text: '全部主播',
                    isActive: true
                }, {
                    type: '1',
                    text: '高颜值',
                    isActive: false
                }, {
                    type: '2',
                    text: '萌妹子',
                    isActive: false
                }, {
                    type: '3',
                    text: '好声音',
                    isActive: false
                }, {
                    type: '4',
                    text: '有才艺',
                    isActive: false
                }, {
                    type: '5',
                    text: '小鲜肉',
                    isActive: false
                }, {
                    type: '6',
                    text: '逗B/MC',
                    isActive: false
                }, {
                    type: '7',
                    text: '劲爆',
                    isActive: false
                }, {
                    type: '8',
                    text: '还有更多',
                    isActive: false
                }]
            };
        },
        methods: {
            switchTab: function (e) {
                let hightLightIndex = parseInt(e.target.dataset.index);
                let type = e.target.dataset.type;

                this.tabs.map(function (tab, index) {
                    if (index === hightLightIndex) {
                        tab.isActive = true;
                    } else {
                        tab.isActive = false;
                    }
                });
                this.$router.push({path: 'list', query: { type: type }});
            }
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
