<template>
    <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            v-for="item in tabArr" :key="item.id"
            :name="'tab_'+item.id"
            :label="item.name"
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
    import grid from '@/pages/grid/grid';
    export default {
        data() {
            return {
                activeName: 'tab_1',
                tabArr: [
                    { id: 1, name: '基础格子分布' },
                    { id: 2, name: '区域布局' },
                    { id: 3, name: '自动布局' },
                    { id: 4, name: 'grid设置' }
                ]
            };
        },
        components: {
            tab_1: base,
            tab_2: area,
            tab_3: flow,
            tab_4: grid
        },
        methods: {}
    };
</script>
<style scoped>
</style>
