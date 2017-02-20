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
    require('./index.less');

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
                    text: '我的关注',
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
