<template>
    <div>
        <div class="parent">
            <div class="left leftbg">
                <div>左侧宽度根据内容决定</div>
                <div>高度没有定义</div>
            </div>
            <div class="right rightbg">
                <ul>
                    <li>无法设置外边距</li>
                    <li>无法等高</li>
                    <li>有些列表，字数不一样，浮动会出现错位问题，如果我们要使用浮动布局列表，就必须限高</li>
                    <li>使用浮动布局还需要修复其带来的副作用——高度塌陷的问题，也就是常提到的“清除浮动”了</li>
                    <li>如果是普通的两列布局，浮动+普通元素的margin便可以实现，但如果是自适应的两列布局，利用float+overflow:hidden便可以实现，这种办法主要通过overflow触发BFC,而BFC不会重叠浮动元素。由于设置overflow:hidden并不会触发IE6-浏览器的haslayout属性，所以需要设置zoom:1来兼容IE6-浏览器。</li>
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
.parent {
    overflow: hidden;
    zoom: 1;
    height: 400px;
    background: #f1f2f3;
}
.left {
    float: left;
}
.right {
    overflow: hidden;
    zoom: 1;
}
</style>