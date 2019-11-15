<template>
    <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            label="基础格子分布"
            name="first"
        ></el-tab-pane>
        <el-tab-pane
            label="区域布局"
            name="second"
        ></el-tab-pane>
        <el-tab-pane
            label="自动布局"
            name="third"
        ></el-tab-pane>
        <keep-alive>
            <div :is="activeName"></div>
        </keep-alive>
    </el-tabs>
</template>

<script>
    import base from '@/pages/grid/base';
    import area from '@/pages/grid/area';
    import flow from '@/pages/grid/flow';
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            first: base,
            second: area,
            third: flow
        },
        methods: {}
    };
</script>
<style scoped>
</style>
