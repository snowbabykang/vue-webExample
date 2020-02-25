<template>
    <el-tabs v-model="activeName" type="border-card" class="contentbox">
        <el-tab-pane label="基础格子分布" name="1">
            <el-alert 
                title="横纵格子分布" 
                description="grid-template-columns和grid-template-rows 横纵格子分布" 
                :closable="false"
                type="success">
            </el-alert>
            <el-form>
                <el-form-item label="grid-template-columns" style="margin:0;">
                    <el-radio-group v-model="grid1Columns">
                        <el-radio label="80px auto 200px">80px auto 200px</el-radio>
                        <el-radio label="200px 1fr 1fr 1fr">200px 1fr 1fr 1fr</el-radio>
                        <el-radio label="repeat(24, 40px)">repeat(24, 40px)</el-radio>
                        <el-radio label="repeat(5, 100px 30px 70px)">repeat(5, 100px 30px 70px)</el-radio>
                        <el-radio label="repeat(auto-fill, 100px)">repeat(auto-fill, 100px)</el-radio>
                        <el-radio label="auto 0.25fr .25fr .25fr">auto 0.25fr .25fr .25fr</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="grid-template-rows">
                    <el-radio-group v-model="grid1Rows">
                        <el-radio label="25% 100px auto 60px">25% 100px auto 60px</el-radio>
                        <el-radio label="1fr 2fr 1fr">1fr 2fr 1fr</el-radio>
                        <el-radio label="auto 1fr 1fr 1fr">auto 1fr 1fr 1fr</el-radio>
                        <el-radio label="1fr 1fr minmax(100px, 1fr)">1fr 1fr minmax(100px, 1fr)[高度要改成280px可测]</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span>左边</span>
            <div class="gridbox gridbox1" :style="{'grid-template-columns': grid1Columns,'grid-template-rows': grid1Rows}">
                <div class="grid1-item-a purplecolor">item-a</div>
                <div class="grid1-item-b yellowcolor">item-b</div>
            </div>
            <span>右边</span>
        </el-tab-pane>
        <el-tab-pane label="区域布局" name="2">
            <el-alert
                title="grid-template-areas 划分区域"
                description="网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值"
                type="success"
                :closable="false">
            </el-alert>
            <el-form>
                <el-form-item label="网格小于容器设置" style="margin:0;">
                    <el-radio-group v-model="grid2ClassName">
                        <el-radio label="equal">网格整体大小 = 容器大小</el-radio>
                        <el-radio label="lt">网格整体大小 < 容器大小</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div v-if="grid2ClassName == 'equal'">
                    <el-form-item label="grid容器 justify-items（水平内容在网格中的位置；横向控制）" style="margin:0;">
                        <el-radio-group v-model="grid2JustifyItems">
                            <el-radio :label="item" v-for="item in alignArr1" :key="item">{{item}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="grid容器 align-items（纵向内容在网格中的位置；纵向控制）">
                        <el-radio-group v-model="grid2AlignItems">
                            <el-radio :label="item" v-for="item in alignArr1" :key="item">{{item}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div>子元素的样式权限高于容器样式</div>
                    <el-form-item label="是否测试子元素对齐方式">
                        <el-radio-group v-model="isgrid2Self">
                            <el-radio :label="0">关闭</el-radio>
                            <el-radio :label="1">开启</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <div v-if="isgrid2Self == 1">
                        <el-form-item label="猕猴桃 justify-self（单个网格元素的水平对齐方式）" style="margin:0;">
                            <el-radio-group v-model="grid2JustifySelf">
                                <el-radio :label="item" v-for="item in alignArr1" :key="item">{{item}}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="猕猴桃 align-self（网格元素的垂直呈现方式）">
                            <el-radio-group v-model="grid2AlignSelf">
                                <el-radio :label="item" v-for="item in alignArr1" :key="item">{{item}}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                </div>
                <div v-if="grid2ClassName == 'lt'">
                    <el-form-item label="justify-content（布局网格宽<容器宽度；横向控制）" style="margin:0;">
                        <el-radio-group v-model="grid2JustifyContent">
                            <el-radio :label="item" v-for="item in alignArr2" :key="item">{{item}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="align-content（布局网格高<容器高度；纵向控制）">
                        <el-radio-group v-model="grid2AlignContent">
                            <el-radio :label="item" v-for="item in alignArr2" :key="item">{{item}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
            </el-form>
            <div class="gridbox gridbox2" :class="grid2ClassName"
                :style="{
                    'justify-items': grid2JustifyItems, 
                    'align-items' : grid2AlignItems,
                    'justify-content' : grid2JustifyContent,
                    'align-content' : grid2AlignContent,
                }">
                <div class="grape purplecolor">葡萄</div>
                <div class="banana yellowcolor">香蕉</div>
                <div class="kiwi greencolor" :style="isgrid2Self == 1 ? {
                    'justify-self': grid2JustifySelf, 
                    'align-self' : grid2AlignSelf,
                } : {}">猕猴桃</div>
                <div class="melon redcolor">西瓜</div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="自动布局" name="3">
            <el-alert
                title="grid-auto-flow 自动布局"
                description="没有指定格子的位置，则自动布局"
                type="success"
                :closable="false">
            </el-alert>
            <el-form>
                <el-form-item label="grid-auto-flow 没有指定位置则自动布局">
                    <el-radio-group v-model="grid3AutoFlow">
                        <el-radio label="row" >row（依次水平排列优先）</el-radio>
                        <el-radio label="column" >column（依次垂直排列优先）</el-radio>
                        <el-radio label="row dense" >row dense</el-radio>
                        <el-radio label="column dense" >column dense</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <el-form :inline="true">
                <el-form-item label="grid-auto-rows 超出网格部分的行高">
                    <el-input v-model="grid4AutoRows"></el-input>
                </el-form-item>
                <el-form-item label="grid-auto-columns 超出网格部分的列宽">
                    <el-input v-model="grid4AutoColumns"></el-input>
                </el-form-item>
            </el-form>
            <div class="gridbox gridbox4"
                :style="{
                    'grid-auto-flow': grid3AutoFlow, 
                    'grid-auto-rows': grid4AutoRows,
                    'grid-auto-columns': grid4AutoColumns
                }">
                <div v-for="item in 9" class="item" :class="'item-'+item">{{item}}</div>
            </div>

            <div>dense这个英文是稠密的意思。如果有设置，则表示自动排列启用“密集”打包算法。如果稍后出现的网格比较小，则尝试看看前面有没有合适的地方放置，使网格尽可能稠密紧凑。此属性值仅仅改变视觉顺序，会导致DOM属性和实际呈现顺序不符合，这对于可访问性是不友好的，建议谨慎使用。</div>
            <ul>
                <li>选中row，水平排列，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面</li>
                <li>选中column，垂直排列</li>
                <li>选中row dense，水平排列，同时前面有空就钻。所以会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行</li>
                <li>选中column dense，垂直排列，会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列</li>
            </ul>
            <div class="gridbox gridbox3"
                :style="{
                    'grid-auto-flow': grid3AutoFlow, 
                }">
                <div class="item-a purplecolor">葡萄item-1固定位置</div>
                <div class="item-b yellowcolor">香蕉item-2固定位置</div>
                <div class="item-c greencolor">猕猴桃item-3</div>
                <div class="item-d redcolor">西瓜item-4</div>
                <div class="item-e bluecolor">蓝莓item-5</div>
            </div>

        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data () {
        return {
            activeName : '1',
            alignArr1: ['stretch','start','end','center'],
            alignArr2: ['stretch','start','end','center','space-between','space-around','space-evenly'],
            grid1Columns : null,
            grid1Rows : null,
            grid2JustifyItems: 'stretch',
            grid2AlignItems: 'stretch',
            isgrid2Self: 0,
            grid2JustifySelf: 'stretch',
            grid2AlignSelf: 'stretch',
            grid2ClassName: 'equal',
            grid2JustifyContent: 'stretch',
            grid2AlignContent: 'stretch',
            grid3AutoFlow: 'row',
            grid4AutoRows: 'auto',
            grid4AutoColumns: 'auto',
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.gridbox{
    display: grid;
    margin-bottom: 20px;
}
.gridbox div{
    outline: 1px dotted;
}
.gridbox1{
    height: 400px;
    background: rgb(196, 196, 196);
}
/* .gridbox1 div{
    background: lightgrey;
    padding: 30px;
}
.gridbox1 div:nth-child(even){
    background: skyblue;
} */
.gridbox2{
    height: 600px;
    background: #f0f1f2;
    /* 
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "grape grape grape"
        "banana 猕猴桃 猕猴桃"
        "banana 猕猴桃 猕猴桃"
        "melon melon melon"; 
    */
    /* 
    grid-column-gap: 10px;
    grid-row-gap: 20px; 
    */
    grid-gap: 0px 0px;
}
.gridbox2.equal{
    grid-template: 
        "grape grape grape" 1fr 
        "banana 猕猴桃 猕猴桃" 1fr 
        "banana 猕猴桃 猕猴桃" 1fr 
        "melon melon melon" 1fr
        /1fr 1fr 1fr;
}
.gridbox2.lt{
    width: 1000px;
    grid-template: 
        "grape grape grape" 100px 
        "banana 猕猴桃 猕猴桃" 100px 
        "banana 猕猴桃 猕猴桃" 100px 
        "melon melon melon" 100px
        /300px 300px 300px;
}
.grape { 
    grid-area: grape;
}
.banana { 
    grid-area: banana;
}
.kiwi { 
    grid-area: 猕猴桃;
}
.melon { 
    grid-area: melon;
}
.gridbox3{
    grid-template: 1fr 1fr 1fr/1fr 2fr 2fr 1fr 2fr;
    height: 300px;
    background: #f0f1f2;
}
.item-a {  grid-column: 1; grid-row: 2 / 4; }
.item-b {  grid-row: 1 / 3; }

.purplecolor { background: #ddb6f9;}
.yellowcolor { background: yellow; }
.greencolor { background: yellowgreen;}
.redcolor { background: #f79e9e;}
.bluecolor { background: #75d1ff;}

.grid1-item-a{
    /* grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3; */
    /* grid-column: 2 / 3;
    grid-row: 1 / 3; */
    grid-area: 1 / 2 / 3 / 3;
}
.grid1-item-b{
    /* grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 3;
    grid-row-end: 5; */
    grid-column: 1 / span 3;
    grid-row: 3 / 5;
}

/* gridbox4 */
.gridbox4{
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}

.item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
}

.item-1 {
    grid-column: 1/3;
    background-color: #ef342a;
}

.item-2 {
    grid-column: 1/3;
    background-color: #f68f26;
}

.item-3 {
    background-color: #4ba946;
}

.item-4 {
    background-color: #0376c2;
}

.item-5 {
    background-color: #c077af;
}

.item-6 {
    background-color: #f8d29d;
}

.item-7 {
    background-color: #b5a87f;
}

.item-8 {
    background-color: #d0e4a9;
}

.item-9 {
    background-color: #4dc7ec;
}




</style>
