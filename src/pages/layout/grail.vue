<template>
    <div>
        <article class="container">
            <div class="center greencolor">
                <h2>圣杯布局</h2>
                <h4>特点：</h4>
                <div>两边固定宽度，中间自适应，唯一区别是dom结构必须是先写中间列部分，这样实现中间列可以优先加载。</div>
                <h4>缺点</h4>
                <div>center部分的最小宽度不能小于left部分的宽度，否则会left部分掉到下一行；如果其中一列内容高度拉长(如下图)，其他两列的背景并不会自动填充。</div>
                <h5>还不如使用flex布局实现，至于先加载中间部分，也可以使用flex布局的order属性</h5>
            </div>
            <div class="left purplecolor"></div>
            <div class="right bluecolor"></div>
        </article>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    padding-left: 220px;
    padding-right: 220px;
}
.left {
    float: left;
    width: 200px;
    height: 400px;
    margin-left: -100%;
    position: relative;
    left: -220px;
}
.center {
    float: left;
    width: 100%;
    height: 500px;
    padding: 10px;
}
.right {
    float: left;
    width: 200px;
    height: 400px;
    margin-left: -200px;
    position: relative;
    right: -220px;
}
</style>