<template>
    <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            label="圣杯布局"
            name="1"
            class="pane1"
        >
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
        </el-tab-pane>
        <el-tab-pane
            label="双飞翼布局"
            name="2"
            class="pane2"
        >
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
                <div class="left purplecolor"></div>
                <div class="right bluecolor"></div>
                <div class="clearfix"></div>
            </article>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        data() {
            return {
                activeName: '1'
            };
        },
        methods: {}
    };
</script>
<style scoped lang="less">
.purplecolor { background: #ddb6f9;}
.yellowcolor { background: yellow; }
.greencolor { background: yellowgreen;}
.redcolor { background: #f79e9e;}
.bluecolor { background: #75d1ff;}
.clearfix{
    clear: both;
}
.pane1 {
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
}
.pane2 {
    .container {
        min-width: 600px;//确保中间内容可以显示出来，两倍left宽+right宽
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
        margin: 0 200px; //新增部分
        padding: 10px;
    }
    .right {
        float: left;
        width: 200px;
        height: 400px;
        margin-left: -200px;
    }
}
</style>
