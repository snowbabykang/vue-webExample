<template>
    <div>
        <div class="form-inline">
            <el-input
                v-model="val"
                style="width: 200px;"
            ></el-input>
            <el-button @click="storageConnect">localstorage通讯</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: '',
            };
        },
        methods: {
            storageConnect: function() {
                localStorage.setItem('connection', this.val);
            },
        },
        mounted() {}
    };
</script>

<style>
</style>