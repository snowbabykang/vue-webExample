<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:28:50
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:50:00
 * @description: file content
-->
<template>
    <div>
        <div>ReportingObserver 可以监听过时的 api、浏览器干预等报告等的打印，在回调里上报，这些是错误监听无法监听到但对了解网页运行情况很有用的数据。</div>
    </div>
</template>
<script>
export default {
    mounted() {
        const reportingObserver = new ReportingObserver(
            (reports, observer) => {
                for (const report of reports) {
                    console.log(report.body); //上报
                }
            },
            { types: ['intervention', 'deprecation'] }
        );

        reportingObserver.observe();
    },
};
</script>
<style lang="less" scoped>
</style>