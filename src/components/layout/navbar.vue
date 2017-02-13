<template>
    <nav>
        <router-link to="/login">登录</router-link>
        <router-link to="/logout">注册</router-link>
        <router-link to="/profile">个人信息</router-link>
        <router-link to="/activity/valentine">专题页</router-link>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            data: {}
        }
    }
}
</script>

<style scoped>

</style>
