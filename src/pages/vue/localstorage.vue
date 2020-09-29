<template>
    <div>
        <h3>获取的storage.name的值：{{name}}</h3>
        <h3>获取的storage.addr的值：{{addr}}</h3>
        <el-form :inline="true">
            <el-form-item label="">
                <el-input v-model="nameVal"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="setStorage('name', nameVal)">设置storage.name的值</el-button>
            </el-form-item>
        </el-form>
        <el-form :inline="true">
            <el-form-item label="">
                <el-input v-model="addrVal"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="setStorage('addr', addrVal)">设置storage.addr的值</el-button>
            </el-form-item>
        </el-form>
        <router-link to="/localstorage" target="_blank">去往jszip页</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: localStorage.getItem('name'),
            nameVal: '',
            addr: localStorage.getItem('addr'),
            addrVal: ''
        };
    },
    mounted() {
        let that = this;
        window.addEventListener('setItem', that.getStorage);
    },
    destroyed() {
        let that = this;
        window.removeEventListener('setItem',that.getStorage);
    },
    methods: {
        getStorage() {
            this.name = localStorage.getItem('name');
            this.addr = localStorage.getItem('addr');
        },
        setStorage(key, value) {
            if (key === 'name') {
                this.resetSetItem(key, value);
            } else {
                localStorage.setItem(key, value);
            }
        }
    }
};
</script>

<style lang="less" scoped>
</style>