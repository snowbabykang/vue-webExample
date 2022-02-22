<!--
 * @author: kangxue
 * @Date: 2022-02-21 10:28:23
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:37:45
 * @description: file content
-->
<template>
    <div>
        <div>MutationObserver 可以监听对元素的属性的修改、对它的子节点的增删改。</div>
        <div>这个可以用来做什么呢？比如文章水印被人通过 devtools 去掉了，那么就可以通过 MutationObserver 监听这个变化，然后重新加上，让水印去不掉。</div>
        <div id="box"><button>光</button></div>
    </div>
</template>
<script>
export default {
    mounted() {
        setTimeout(() => {
            box.style.background = 'red';
        }, 2000);

        setTimeout(() => {
            const dom = document.createElement('button');
            dom.textContent = '东东东';
            box.appendChild(dom);
        }, 3000);

        setTimeout(() => {
            document.querySelectorAll('button')[0].remove();
        }, 5000);
        const mutationObserver = new MutationObserver((mutationsList) => {
            console.log(mutationsList);
        });

        mutationObserver.observe(box, {
            attributes: true,
            childList: true
        });
    },
};
</script>
<style lang="less" scoped>
#box {
    width: 100px;
    height: 100px;
    background: blue;

    position: relative;
}
</style>