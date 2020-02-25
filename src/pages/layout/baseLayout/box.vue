<template>
    <div>
        <div class="webkitbox">
            <div class="leftbg">
                <div>左侧宽度根据内容决定</div>
                <div>高度没有定义,box等高</div>
            </div>
            <div class="box-item rightbg">
                <ul>
                    <li>box是flex布局的旧版，都是弹性盒子的布局，各阶段的草案命名不一样，用法大同小异，flex兼容性更好一些</li>
                    <li>box是2009年提出来的，是旧版的写法，基本写法需要增加前缀才有效，ie-edge支持-webkit-box,但ie11及以下都不支持</li>
                    <li>flex布局标准是2012年提出来的，不用写-webkit-等前缀都基本上能解析。包括ie11，ie-edge,safari,opera,chrome都能很好地支持这个布局。</li>
                    <li>右侧设置box-flex:1占剩余全部宽度</li>
                    <li>box可设置外边距</li>
                    <li>box等高</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.webkitbox {
    display: -webkit-box;
}
.box-item {
    margin-left: 20px;
    -webkit-box-flex: 1;
}
</style>