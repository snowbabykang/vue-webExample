<!--
 * @author: kangxue
 * @Date: 2021-04-29 10:24:59
 * @LastEditors: kangxue
 * @LastEditTime: 2021-04-29 10:34:00
 * @description: file content
-->
<template>
    <el-tabs v-model="activeName"
        @tab-click="handleClick">
        <el-tab-pane label="虚拟列表无法新增"
            name="first">
        </el-tab-pane>
        <el-tab-pane label="虚拟列表可新增"
            name="second">
        </el-tab-pane>
        <virtualList1 v-if="activeName === 'first'"/>
        <virtualList2 v-if="activeName === 'second'"/>
    </el-tabs>
</template>

<script>
import virtualList1 from './virtualList1';
import virtualList2 from './virtualList2';
export default {
    components: {
        virtualList1,
        virtualList2
    },
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style>
</style>