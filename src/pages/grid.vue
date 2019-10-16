<template>
    <div class="contentbox">
        <el-alert 
            title="横纵格子分布" 
            description="grid-template-columns和grid-template-rows 横纵格子分布" 
            :closable="false"
            type="info">
        </el-alert>
        <h4>基础格子分布</h4>
        <el-form>
            <el-form-item label="grid-template-columns" style="margin:0;">
                <el-radio-group v-model="grid1Columns">
                    <el-radio label="80px auto 100px">80px auto 100px</el-radio>
                    <el-radio label="200px 1fr 1fr 1fr">200px 1fr 1fr 1fr</el-radio>
                    <el-radio label="repeat(24, 40px)">repeat(24, 40px)</el-radio>
                    <el-radio label="auto 0.25fr .25fr .25fr">auto 0.25fr .25fr .25fr</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="grid-template-rows">
                <el-radio-group v-model="grid1Rows">
                    <el-radio label="25% 100px auto 60px">25% 100px auto 60px</el-radio>
                    <el-radio label="1fr 2fr 1fr">1fr 2fr 1fr</el-radio>
                    <el-radio label="auto 1fr 1fr 1fr">auto 1fr 1fr 1fr</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div class="gridbox gridbox1" :style="{'grid-template-columns': grid1Columns,'grid-template-rows': grid1Rows}">
            <div>111</div>
        </div>
        <el-alert
            title="grid-template-areas 划分区域"
            description="网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值"
            type="success"
            :closable="false">
        </el-alert>
        <h4>区域布局</h4>
        <el-form>
            <el-form-item label="justify-items（水平内容在网格中的位置；横向控制）" style="margin:0;">
                <el-radio-group v-model="grid2JustifyItems">
                    <el-radio label="stretch">stretch</el-radio>
                    <el-radio label="start">start</el-radio>
                    <el-radio label="end">end</el-radio>
                    <el-radio label="center">center</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="align-items（纵向内容在网格中的位置；纵向控制）">
                <el-radio-group v-model="grid2AlignItems">
                    <el-radio label="stretch">stretch</el-radio>
                    <el-radio label="start">start</el-radio>
                    <el-radio label="end">end</el-radio>
                    <el-radio label="center">center</el-radio>
                </el-radio-group>
            </el-form-item>
            <hr>
            <el-form-item label="网格小于容器设置" style="margin:0;">
                <el-radio-group v-model="grid2ClassName">
                    <el-radio label="equal">网格整体大小 = 容器大小</el-radio>
                    <el-radio label="lt">网格整体大小 < 容器大小</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="justify-content（布局网格宽<容器宽度；横向控制）" style="margin:0;">
                <el-radio-group v-model="grid2JustifyContent">
                    <el-radio label="stretch">stretch</el-radio>
                    <el-radio label="start">start</el-radio>
                    <el-radio label="end">end</el-radio>
                    <el-radio label="center">center</el-radio>
                    <el-radio label="space-between">space-between</el-radio>
                    <el-radio label="space-around">space-around</el-radio>
                    <el-radio label="space-evenly">space-evenly</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="align-content（布局网格高<容器高度；纵向控制）">
                <el-radio-group v-model="grid2AlignContent">
                    <el-radio label="stretch">stretch</el-radio>
                    <el-radio label="start">start</el-radio>
                    <el-radio label="end">end</el-radio>
                    <el-radio label="center">center</el-radio>
                    <el-radio label="space-between">space-between</el-radio>
                    <el-radio label="space-around">space-around</el-radio>
                    <el-radio label="space-evenly">space-evenly</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div class="gridbox gridbox2" :class="grid2ClassName"
            :style="{
                'justify-items': grid2JustifyItems, 
                'align-items' : grid2AlignItems,
                'justify-content' : grid2JustifyContent,
                'align-content' : grid2AlignContent,
            }">
            <div class="grape">葡萄</div>
            <div class="banana">香蕉</div>
            <div class="kiwi">猕猴桃</div>
            <div class="melon">西瓜</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            grid1Columns : null,
            grid1Rows : null,
            grid2JustifyItems: 'stretch',
            grid2AlignItems: 'stretch',
            grid2ClassName: 'equal',
            grid2JustifyContent: 'stretch',
            grid2AlignContent: 'stretch',
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.contentbox{
    padding: 20px;
}
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
.gridbox1 div{
    background: lightgrey;
    padding: 30px;
}
.gridbox1 div:nth-child(even){
    background: skyblue;
}
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
    background: #ddb6f9;
}
.banana { 
    grid-area: banana;
    background: yellow;
}
.kiwi { 
    grid-area: 猕猴桃;
    background: yellowgreen;
}
.melon { 
    grid-area: melon;
    background: #f79e9e;
}
</style>
