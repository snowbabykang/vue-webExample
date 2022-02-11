<template>
    <el-tabs v-model="activeName" type="border-card"  class="contentbox">
        <el-tab-pane label="checkbox,radio样式" name="first"></el-tab-pane>
        <keep-alive>
            <div :is="activeName"></div>
        </keep-alive>
    </el-tabs>
</template>

<script>
import checkbox from '@/pages/css3/form/checkbox';
export default {
    data () {
        return {
            activeName: 'first',
        }
    },
    components: {
        first : checkbox
    },
    methods: {
    }
}
</script>
<style scoped>

</style>
