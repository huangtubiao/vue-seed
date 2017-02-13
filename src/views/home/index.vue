<template>
    <div>
        <navbar></navbar>
        <img src="../../assets/images/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
import navbar from 'src/components/layout/navbar'

export default {
    name: 'app',
    components: { navbar },
    mounted () {
        console.log('APP start......')
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

