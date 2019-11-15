<template>
    <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            label="单列布局"
            name="1"
            class="pane1"
        >
            <div class="header">header</div>
            <div class="content">header,content和footer等宽的单列布局</div>
            <div class="footer">footer</div>
        </el-tab-pane>
        <!-- <el-tab-pane label="单列非等宽布局" name="2" class="pane2">
            <div class="header">header</div>
            <div class="content">
                <div>header与footer等宽,content略窄的单列布局</div>
                <div>这种有两种情况</div>
                <ul>
                    <li>header与footer等宽，背景内容都是全屏宽度</li>
                    <li>header与footer背景等宽，内容与content等宽</li>
                </ul>
            </div>
            <div class="footer">footer</div>
        </el-tab-pane> -->
        <el-tab-pane
            label="float双列布局"
            name="3"
            class="pane3"
        >
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
        </el-tab-pane>
        <el-tab-pane
            label="table双列布局"
            name="4"
            class="pane4"
        >
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
        </el-tab-pane>
        <el-tab-pane
            label="box双列布局"
            name="5"
            class="pane5"
        >
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
        </el-tab-pane>
        <el-tab-pane
            label="flex双列布局"
            name="6"
            class="pane6"
        >
            <div class="flexbox">
                <div class="leftbg">
                    <div>左侧宽度根据内容决定</div>
                    <div>高度没有定义,flex等高</div>
                </div>
                <div class="flex-item rightbg">
                    <ul>
                        <li>右侧设置flex:1占剩余全部宽度</li>
                        <li>flex可设置外边距</li>
                        <li>在Flex布局中，flex子元素的设置float，clear以及vertical-align属性都是没有用的。</li>
                        <li>Flexbox布局最适合应用程序的组件和小规模布局（一维布局），而Grid布局则适用于更大规模的布局（二维布局），</li>
                        <li>Flex老语法不用在管了，舒爽弃之，然后私有前缀也不用再加了</li>
                        <li>flex等高</li>
                        <li>内容想垂直居中，使子项再套一层flex，display:flex;align-items:center;</li>
                        <li>
                            <router-link
                                class="routerlink"
                                to="/flex"
                            >flex布局测试</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane
            label="grid布局"
            name="7"
            class="pane7"
        >
            <div class="gridbox">
                <div class="grid-slider leftbg">
                    <div>高度没有定义,grid等高，占1fr</div>
                    <div>侧边栏宽240px，间隔20px</div>
                </div>
                <div class="grid-header">header高80px，间隔20px</div>
                <div class="grid-content rightbg">
                    <ul>
                        <li>设置grid-template-columns:auto 1fr;左侧自适应，右侧占剩余部分</li>
                        <li>也可以使用grid-template直接整体页面二维布局</li>
                        <li>grid可设置grid-gap作为单元格外边距</li>
                        <li>Grid布局则适用于更大规模的布局（二维布局），而Flexbox布局最适合应用程序的组件和小规模布局（一维布局）</li>
                        <li>在Grid布局中，float，display:inline-block，display:table-cell，vertical-align以及column-*这些属性和声明对grid子项是没有任何作用的</li>
                        <li>
                            <router-link
                                class="routerlink"
                                to="/grid"
                            >grid布局测试</router-link>
                        </li>
                        <li>grid等高</li>
                        <li>
                            <pre>
                                .gridbox{
                                    display:grid;
                                    grid-template: 
                                    "header header header" 80px 
                                    "slider main main" 1fr 
                                    "slider footer footer" 40px
                                    /240px 1fr 1fr;
                                }
                            </pre>
                        </li>
                    </ul>
                </div>
                <div class="grid-footer">footer高40px，间隔20px</div>
            </div>
        </el-tab-pane>
        <el-tab-pane
            label="table动态高度的页脚"
            name="8"
            class="pane8"
            style="height: 640px;"
        >
            <div class="tablebox2">
                <div class="table2-main">
                    <h3>table动态高度的页脚贴在页面底部</h3>
                    <div>不管main部分高度多少，footer永远处于底部，解决那种main内容短，footer跑上去的情况</div>
                    <div>当然也可以使用定位解决，flexbox也可以，使用垂直分配flex-direction: column;</div>
                    <el-button
                        type="primary"
                        @click="add1()"
                    >添加内容到主体区域</el-button>
                    <el-button
                        type="primary"
                        @click="add2()"
                    >添加内容到底部</el-button>
                    <ul>
                        <li
                            v-for="item in main"
                            :key="item"
                        >额外添加的行{{item}}</li>
                    </ul>
                </div>
                <div class="table2-footer">这里是底部
                    <ul>
                        <li
                            v-for="item in footer"
                            :key="item"
                        >额外添加的footer{{item}}</li>
                    </ul>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane
            label="粘连布局"
            name="11"
            class="pane11"
            style="height: 640px;overflow:auto;"
        >
            <div class="wrap">
                <div class="main">
                    <el-button
                        type="primary"
                        @click="add1()"
                    >添加内容到主体区域</el-button>
                    <ul>
                        <li
                            v-for="item in main"
                            :key="item"
                        >main{{item}}</li>
                    </ul>
                </div>
            </div>
            <div class="footer">footer</div>
        </el-tab-pane>
        <el-tab-pane
            label="圣杯布局"
            name="9"
            class="pane9"
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
            name="10"
            class="pane10"
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
                <div class="left purplecolor">left</div>
                <div class="right bluecolor">right</div>
                <div class="clearfix"></div>
            </article>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        data() {
            return {
                activeName: '1',
                main: 3,
                footer: 1
            };
        },
        methods: {
            add1() {
                this.main += 3;
            },
            add2() {
                this.footer += 2;
            }
        }
    };
</script>
<style scoped lang="less">
.header,
.footer {
    height: 100px;
    line-height: 100px;
    background-color: #a0b3d6;
    color: #fff;
    text-align: center;
}
.content {
    margin: 0 auto;
    height: 400px;
    background-color: #f1f2f3;
}
.footer {
    background-color: #333;
}
.pane1 {
    .header,
    .footer {
        margin: 0 auto;
    }
}
.pane2 {
    .content {
        max-width: 80%;
    }
}

.pane3 {
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
}
.leftbg {
    background: #a0b3d6;
    padding: 10px;
}
.rightbg {
    background: #ffe6b8;
    padding: 10px;
}
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
.tablebox2 {
    display: table;
    width: 100%;
    background: #fffad5;
    height: 100%;
}
.table2-main {
    height: 100%;
    overflow: auto;
}
.tablebox2 li {
    padding: 10px 0;
}

.table2-footer {
    display: table-row;
    height: 40px;
    background: #a0b3d6;
}

.webkitbox {
    display: -webkit-box;
}
.box-item {
    margin-left: 20px;
    -webkit-box-flex: 1;
}
.flexbox {
    display: flex;
}
.flex-item {
    flex: 1;
    margin-left: 20px;
}
.purplecolor {
    background: #ddb6f9;
}
.yellowcolor {
    background: yellow;
}
.greencolor {
    background: yellowgreen;
}
.redcolor {
    background: #f79e9e;
}
.bluecolor {
    background: #75d1ff;
}
.clearfix {
    clear: both;
}
.pane9 {
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
.pane10 {
    .container {
        min-width: 600px; //确保中间内容可以显示出来，两倍left宽+right宽
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
.pane11 {
    .wrap {
        min-height: 100%;
        background: pink;
        overflow: hidden;
        li{
            padding: 10px;
        }
    }
    .wrap .main {
        padding-bottom: 50px;
    }
    .footer {
        height: 50px;
        line-height: 50px;
        background: deeppink;
        text-align: center;
        margin-top: -50px;
    }
}
</style>
<style scoped>
.pane7 {
    height: 800px;
}
.gridbox {
    display: grid;
    height: 100%;
    grid-gap: 20px;
    grid-template:
        'header header header' 80px
        'slider main main' 1fr
        'slider footer footer' 40px
        /240px 1fr 1fr;
}
.grid-header {
    grid-area: header;
    background: #fffad5;
}
.grid-slider {
    grid-area: slider;
}
.grid-content {
    grid-area: main;
}
.grid-footer {
    grid-area: footer;
    background: #333;
    color: #fff;
}
</style>
