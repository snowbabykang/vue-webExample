<template>
    <div>
        组件1{{content}}
        当前值： {{count}}
        <el-button type="primary" @click="add">add</el-button>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            count: 1
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
}
</script>

<style>

</style>