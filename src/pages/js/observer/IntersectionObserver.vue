<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:20:34
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:31:59
 * @description: file content
-->
<template>
    <div>
        <div>IntersectionObserver 可以监听一个元素和可视区域相交部分的比例，然后在可视比例达到某个阈值的时候触发回调。</div>
        <div>我们在做一些数据采集的时候，希望知道某个元素是否是可见的，什么时候可见的，就可以用这个 api 来监听，还有做图片的懒加载的时候，可以当可视比例达到某个比例再触发加载。</div>
        <div id="box1">BOX111</div>
        <div id="box2">BOX222</div>
    </div>
</template>
<script>
export default {
    mounted() {
        const intersectionObserver = new IntersectionObserver(
            function (entries) {
                console.log('info:');
                entries.forEach((item) => {
                    console.log(item.target, item.intersectionRatio);
                });
            },
            {
                threshold: [0.5, 1]
            }
        );

        intersectionObserver.observe(document.querySelector('#box1'));
        intersectionObserver.observe(document.querySelector('#box2'));
    }
};
</script>
<style lang="less" scoped>
#box1,
#box2 {
    width: 100px;
    height: 100px;
    background: blue;
    color: #fff;

    position: relative;
}
#box1 {
    top: 600px;
}
#box2 {
    top: 800px;
}
</style>