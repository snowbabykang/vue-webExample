<template>
    <el-tabs v-model="activeName" type="border-card"  class="contentbox">
        <el-tab-pane label="columns基础属性测试" name="first"></el-tab-pane>
        <el-tab-pane label="瀑布流示例" name="second"></el-tab-pane>
        <el-tab-pane label="翻书示例" name="third"></el-tab-pane>
        <!-- <el-tab-pane label="瀑布流加载" name="four"></el-tab-pane> -->
        <keep-alive>
            <div :is="activeName"></div>
        </keep-alive>
    </el-tabs>
</template>

<script>
import index from '@/pages/columns/index';
import waterfall from '@/pages/columns/waterfall';
import pageTurn from '@/pages/columns/pageTurn';
import waterfallLoad from '@/pages/columns/waterfallLoad';
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
        four : waterfallLoad,
    },
    methods: {
    }
}
</script>
<style scoped>

</style>
