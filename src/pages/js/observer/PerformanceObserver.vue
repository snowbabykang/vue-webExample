<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:28:42
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:39:43
 * @description: file content
-->
<template>
    <div>
        <div>PerformanceObserver 用于监听记录 performance 数据的行为，一旦记录了就会触发回调，这样我们就可以在回调里把这些数据上报。</div>
        <button @click="measureClick()">Measure</button>

        <img src="https://p9-passport.byteacctimg.com/img/user-avatar/4e9e751e2b32fb8afbbf559a296ccbf2~300x300.image" />

    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
        const performanceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                console.log(entry); // 上报
            });
        });
        performanceObserver.observe({ entryTypes: ['resource', 'mark', 'measure'] });

        performance.mark('registered-observer');
    },
    methods: {
        measureClick() {
            performance.measure('button clicked');
        }
    }
};
</script>
<style lang="less" scoped>
</style>