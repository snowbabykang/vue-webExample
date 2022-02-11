<template>
    <el-tabs v-model="activeName" type="border-card"  class="contentbox">
        <el-tab-pane label="仪表盘渐变" name="first"></el-tab-pane>
        <keep-alive>
            <div :is="activeName"></div>
        </keep-alive>
    </el-tabs>
</template>

<script>
import conicGradient from '@/pages/css3/gradient/conicGradient';
export default {
    data () {
        return {
            activeName: 'first',
        }
    },
    components: {
        first : conicGradient
    },
    methods: {
    }
}
</script>
<style scoped>

</style>
