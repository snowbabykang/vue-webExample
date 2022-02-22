<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:20:34
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:29:39
 * @description: file content
-->
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
            <div style="height:600px;overflow:auto;">
                <div :is="activeName"></div>
            </div>
        </keep-alive>
    </el-tabs>
</template>

<script>
    import IntersectionObserver from './IntersectionObserver';
    import MutationObserver from './MutationObserver';
    import ResizeObserver from './ResizeObserver';
    import PerformanceObserver from './PerformanceObserver';
    import ReportingObserver from './ReportingObserver';
    export default {
        data() {
            return {
                activeName: 'tab_1',
                tabArr: [
                    { id: 1, name: 'IntersectionObserver' },
                    { id: 2, name: 'MutationObserver' },
                    { id: 3, name: 'ResizeObserver' },
                    { id: 4, name: 'PerformanceObserver' },
                    { id: 5, name: 'ReportingObserver' },
                ]
            };
        },
        components: {
            tab_1: IntersectionObserver,
            tab_2: MutationObserver,
            tab_3: ResizeObserver,
            tab_4: PerformanceObserver,
            tab_5: ReportingObserver,
        }
    };
</script>
