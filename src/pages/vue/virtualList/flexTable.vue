<!--
 * @author: kangxue
 * @Date: 2021-04-29 11:42:11
 * @LastEditors: kangxue
 * @LastEditTime: 2021-05-08 17:29:54
 * @description: flex模拟table样式样式，且可以固定左右侧，固定上侧
-->
<template>
    <div>
        <div class="flex-box flex-header">
            <div class="flex-item flex-1"
                v-for="(item,index) in 20"
                :key="index">标题{{item}}</div>
        </div>
        <div class="scroll-box">
            <div class="flex-box flex-con list-con"
                v-for="(item,index) in list"
                :key="index">
                <div class="flex-item flex-1 flex-fix-left1">左侧固定1</div>
                <div class="flex-item flex-1 flex-fix-left2">左侧固定2<br />左侧固定2</div>
                <div class="flex-item flex-1"
                    v-for="(val,key) in 17"
                    :key="key">{{item.title}}-{{key+3}}</div>
                <div class="flex-item flex-1 flex-fix-right">操作</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        };
    },
    computed: {},
    mounted() {
        const ARR_SIZE = 10;
        const hugeArr = new Array(ARR_SIZE).fill(1);
        for (let i = 0; i < hugeArr.length; i++) {
            this.list.push({
                title: '内容' + (i + 1)
            });
        }
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.flex-box {
    display: flex;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    .flex-item {
        padding: 4px;
        border-right: 1px solid #ddd;
        display: flex;
        align-items: center;
        position: relative;
    }
    .flex-1 {
        flex: 1;
    }
}
.flex-header {
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    background: #ccc;
    font-weight: bold;
}
.list-con {
    width: 2000px;
}
.scroll-box {
    position: relative;
    width: 100%;
    overflow: auto scroll;
    max-height: 300px;
}
.flex-fix-left1,
.flex-fix-left2,
.flex-fix-right {
    position: sticky;
}

.overflow-company-second {
    overflow: hidden;
    height: 88px;
    border-bottom: 1px solid #ccc;
}
</style>
