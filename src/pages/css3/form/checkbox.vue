<!--
 * @author: kangxue
 * @Date: 2022-01-07 18:23:59
 * @LastEditors: kangxue
 * @LastEditTime: 2022-01-07 18:24:00
 * @description: file content
-->
<template>
    <div>
        <input type="checkbox"
            class="checkbox"
            checked>
        <input type="radio"
            class="radio"
            checked>
        <input type="range"
            class="range">
        <progress value="70"
            max="100"
            class="progress"> 70% </progress>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.checkbox {
    width: 40px;
    height: 40px;
    accent-color: crimson;
}

.radio {
    width: 40px;
    height: 40px;
    accent-color: dodgerblue;
}

.range {
    width: 200px;
    accent-color: lawngreen;
}

.progress {
    width: 200px;
    accent-color: coral;
}
</style>