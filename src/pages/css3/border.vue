<template>
    <div>
        <ul>
            <li>border-image CSS属性允许在元素的边框上绘制图像。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。使用 border-image 时，其将会替换掉 border-style 属性所设置的边框样式。虽然规范要求<b>使用 border-image 时边框样式必须存在</b>，但一些浏览器可能没有实现这一点。</li>
            <li>特别注意，若 border-image-source（此值可用border-image-source或border-image简写设置) 的值为 none 或者图片不能显示，则将应用 border-style。</li>
            <li>Internet Explorer 不支持 border-image 属性</li>
        </ul>
        <pre>
            /* border-image: image-source image-height image-width image-repeat */
            border-image: url("/images/border.png") 30 30 repeat;
            border-image: url("/images/border.png") 30 30 stretch;</pre>

        <div class="el-table el-table--border init-table">
            <table>
                <tr>
                    <th>值</th>
                    <th>描述</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>border-image-source</td>
                    <td>用在边框的图片的路径</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>border-image-slice</td>
                    <td>图片边框向内偏移</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>border-image-width</td>
                    <td>图片边框的宽度</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>border-image-outset</td>
                    <td>边框图像区域超出边框的量</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>border-image-repeat</td>
                    <td>图像边框是否应平铺(repeat)、铺满(round)或拉伸(stretch)</td>
                    <td>stretch</td>
                </tr>
            </table>
        </div>
        <br>
        <div>
            border图片：<img
                src="static/images/border.png"
                alt=""
            >
        </div>
        <ul>
            <li>1.border-image的参数：图片链接source，裁剪位置slice，重复方式repeat</li>
            <li>2.裁剪位置是没有单位的，或者说是默认单位就是像素(px)，并且支持百分比值，这里的位置可以是1到4个参数，和margin的理解方式一样，是按照上右下左顺时针的方式进行裁剪，即离上面多少，离右边多少，离下面多少，离左边多少</li>
            <li>3.在进行变化的时候，边角是不发生变化的</li>
            <li>4.如果使用border属性，border-image要写在border下方</li>
        </ul>
        <div class="bitmap stretch">border-image-repeat: stretched 默认值。拉伸图像来填充区域</div>
        <p>边角的不会发生变化，水平的部分就是水平拉伸，垂直部分就是垂直拉伸，很明显</p>
        <br>
        <div class="bitmap round">border-image-repeat: round 类似 repeat 值。如果无法完整平铺所有图像，则对图像进行缩放以适应区域。</div>
        <p>和上图进行对比会发现，这就是重复，而且重复的还是除了边角之外的部分，但是不知道大家有没有发现，这个重复得很整齐，也就是说这个并没有多出一部分不能完好的放置，而是每一个都很完整，这就是平铺和重复的区别了</p>
        <br>
        <div class="bitmap repeat">border-image-repeat: repeat 平铺（repeated）图像来填充区域。</div>
        <p>这个地方就出现了上面说的那个问题，在重复的时候会发生有重叠的情况，也就是说不是每一个都完好。那为什么平铺可以做到呢？这是因为平铺会把每一个方块都等比例的缩小，使他们刚好可以完好的放置在中间，不会产生重叠，这也是平铺和重复的区别。</p>
        <br>
        <div class="bitmap space">border-image-repeat: space 类似 repeat 值。如果无法完整平铺所有图像，扩展空间会分布在图像周围</div>
        <br>
        <div class="gradient">渐变色边框</div>
        <h4>border-image解决以前的某些问题，应用</h4>
        <div>选项卡的图：<img src="static/images/border/border_tab.png" alt=""></div>
        <div class="border_image">选项卡选项卡选项卡选项卡</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
.bitmap {
    border: 30px solid transparent;
    padding: 20px;
}
.stretch {
    border-image: url('../../../static/images/border.png') 30 30 stretch;
}
.repeat {
    border-image: url('../../../static/images/border.png') 28 28 repeat;
}
.round {
    border-image: url('../../../static/images/border.png') 28 28 round;
}
.space {
    border-image: url('../../../static/images/border.png') 28 28 space;
}
.gradient {
    border: 30px solid;
    border-image: linear-gradient(red, yellow) 10;
    padding: 20px;
}
p{
    color: red;
}
.border_image{
    padding: 10px;
    border: 5px solid transparent;
    border-image: url('../../../static/images/border/border_tab.png') 5 5 stretch; 
    /* border-image-width: 6rem 1.5rem; */
    border-bottom: none;
    text-align: center;
}
</style>