<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:28:32
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:37:47
 * @description: file content
-->
<template>
    <div>
        <div>元素可以用 ResizeObserver 监听大小的改变，当 width、height 被修改时会触发回调</div>
        <div id="box"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        const box = document.querySelector('#box');

        setTimeout(() => {
            box.style.width = '200px';
        }, 3000);
        const resizeObserver = new ResizeObserver((entries) => {
            console.log('当前大小', entries);
        });
        resizeObserver.observe(box);
    },
};
</script>
<style lang="less" scoped>
#box {
    width: 100px;
    height: 100px;
    background: blue;
}
</style>