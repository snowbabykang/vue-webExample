<!--
 * @author: kangxue
 * @Date: 2021-04-29 10:24:59
 * @LastEditors: kangxue
 * @LastEditTime: 2021-05-08 17:33:27
 * @description: file content
-->
<template>
    <el-tabs v-model="activeName"
        @tab-click="handleClick">
        <el-tab-pane label="虚拟列表无法新增"
            name="1">
        </el-tab-pane>
        <el-tab-pane label="虚拟列表可新增"
            name="2">
        </el-tab-pane>
        <el-tab-pane label="flex模拟table固定"
            name="3">
        </el-tab-pane>
        <virtualList1 v-if="activeName === '1'"/>
        <virtualList2 v-if="activeName === '2'"/>
        <flexTable v-if="activeName === '3'"/>
    </el-tabs>
</template>

<script>
import virtualList1 from './virtualList1';
import virtualList2 from './virtualList2';
import flexTable from './flexTable';
export default {
    components: {
        virtualList1,
        virtualList2,
        flexTable
    },
    data() {
        return {
            activeName: '2'
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