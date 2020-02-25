<template>
    <div>
        <article class="container">
            <div class="center greencolor">
                <div class="inner">
                    <h2>双飞翼布局</h2>
                    <h4>特点：</h4>
                    <div>同样也是三栏布局，在圣杯布局基础上进一步优化，解决了圣杯布局错乱问题，实现了内容与布局的分离。而且任何一栏都可以是最高栏，不会出问题。</div>
                    <h4>实现步骤</h4>
                    <ul>
                        <li>三个部分都设定为左浮动，然后设置center的宽度为100%，此时，left和right部分会跳到下一行；</li>
                        <li>通过设置margin-left为负值让left和right部分回到与center部分同一行；</li>
                        <li>center部分增加一个内层div，并设margin: 0 200px；</li>
                    </ul>
                    <h4>缺点</h4>
                    <div>多加一层 dom 树节点，增加渲染树生成的计算量。</div>
                </div>
            </div>
            <div class="left purplecolor">left</div>
            <div class="right bluecolor">right</div>
            <div class="clearfix"></div>
        </article>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 确保中间内容可以显示出来，两倍left宽+right宽 */
.container {
    min-width: 600px; 
}
.left {
    float: left;
    width: 200px;
    height: 400px;
    margin-left: -100%;
}
.center {
    float: left;
    width: 100%;
    height: 500px;
}
.center .inner {
    margin: 0 200px;
    padding: 10px;
}
.right {
    float: left;
    width: 200px;
    height: 400px;
    margin-left: -200px;
}
</style>