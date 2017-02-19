<template>
    <div class="qf-tabs">
        <nav class="navbar">
            <ul class="title-list">
                <li v-for="(tab, index) in tabs" v-bind:class="{ active: tab.isActive }">
                    <a :data-tab="index" @click="switchTab">{{ tab.text }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    require('./index.less')

    export default {
        name: 'navbar',
        data() {
            return {
                isActive: true,
                tabs: [{
                    label: 'ALL_ANCHORS',
                    text: '全部主播',
                    isActive: true
                }, {
                    label: 'LIKE_ANCHORS',
                    text: '我的关注',
                    isActive: false
                }]
            }
        },
        methods: {
            switchTab: function(e) {
                let hightLightIndex = parseInt(e.target.dataset.tab);
                this.tabs.map(function(tab, index) {
                    if (index === hightLightIndex) {
                        tab.isActive = true;
                    } else {
                        tab.isActive = false;
                    }
                })
                
            }
        }
    }
</script>
