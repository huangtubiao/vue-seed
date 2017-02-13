<template>
    <div class="list">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <a href="#">item</a>
            </li>
            <li>
                <a href="#">item</a>
            </li>
            <li>
                <a href="#">item</a>
            </li>
            <li>
                <a href="#">item</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            msg: '列表'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
