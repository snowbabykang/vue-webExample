<template>
    <el-tabs v-model="activeName" type="border-card"  class="contentbox">
        <el-tab-pane label="columns基础属性测试" name="first"></el-tab-pane>
        <el-tab-pane label="瀑布流示例" name="second"></el-tab-pane>
        <el-tab-pane label="翻书示例" name="third"></el-tab-pane>
        <el-tab-pane label="瀑布流示例2" name="four"></el-tab-pane>
        <el-tab-pane label="瀑布流加载" name="five"></el-tab-pane>
        <keep-alive>
            <div :is="activeName"></div>
        </keep-alive>
    </el-tabs>
</template>

<script>
import index from '@/pages/layout/columns/index';
import waterfall from '@/pages/layout/columns/waterfall';
import pageTurn from '@/pages/layout/columns/pageTurn';
import waterfall2 from '@/pages/layout/columns/waterfall2';
import waterfallLoad from '@/pages/layout/columns/waterfallLoad';
export default {
    data () {
        return {
            activeName: 'first',
        }
    },
    components: {
        first : index, 
        second : waterfall,
        third : pageTurn,
        four : waterfall2,
        five: waterfallLoad
    },
    methods: {
    }
}
</script>
<style scoped>

</style>
