<template>
    <div>
        <div class="tablebox">
            <div
                class="table-cell leftbg"
                style="width: 240px;"
            >
                <div>左侧宽度固定240px</div>
                <div>高度没有定义,table等高</div>
                <div>左侧不固定宽的话，会自适应，却是像表格那个自适应，不是纯粹根据内容决定</div>
            </div>
            <div class="table-cell rightbg">
                <ul>
                    <li>display:table的写法必须固定宽度，否则会向表格一样，根据文字内容，设置100%宽度能<b>自适应分配宽度</b></li>
                    <li>table能解决<b>等高问题</b>，而且可以使用vertical-align<b>上下居中</b></li>
                    <li>table能实现动态高度的页脚贴在页面底部（示例看下方）</li>
                    <li>display: table时padding会失效；（可缺省，会创建匿名表格元素）</li>
                    <li>display: table-row时margin、padding同时失效</li>
                    <li>display: table-cell时margin会失效，padding有效，高度有效；float, position:absolute会失效，不用同时使用</li>
                    <li>能兼容IE8，IE9</li>
                    <li>CSS表格能够解决所有那些我们在使用绝对定位和浮动定位进行多列布局时所遇到的问题，不用担心定位和清除浮动的问题</li>
                    <li>table元素在HTML当中是一个包含语义的标签：它描述什么是数据。因此，你只能用它来标记那些需要制表的数据，例如一张财务信息表。如果数据能够以电子表格的形式保存在你的电脑中，那它在HTML文档中很可能需要用到table标签进行标记。从另一方面来看，display的table属性值只是声明了某些元素在浏览器中的样式——它不包含语义。如果使用table元素来进行布局，它将会告诉客户端：这些数据是制表的。使用一些display属性被设置为table和table-cell之类的div标签，除了告诉客户端以某种特定的样式来渲染它们以外，不会告诉客户端任何语义，只要客户端能够支持这些属性值。</li>
                    <li>当然，我们同样还要注意，当我们真的需要制表数据的时候不要使用一大堆被声明为display:table;的div元素。</li>
                </ul>
                <h5>匿名表格元素</h5>
                <div>CSS表格除了包含table布局的普通规则之外，同时还有着CSS table布局的超强特性：缺少的表格元素会被浏览器以匿名方式创建。</div>
                <div>意思是，如果我们为元素使用“display:table-cell;”属性，而不将其父容器设置为“display:table-row;”属性，浏览器会默认创建出一个表格行，就好像文档中真的存在一个被声明的表格行一样。</div>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tablebox {
    display: table;
    height: 400px;
    background: #f1f2f3;
    width: 100%;
}
.table-cell {
    display: table-cell;
    vertical-align: middle;
}
</style>