<template>
    <div>
        <el-alert
            title="grid-auto-flow 自动布局"
            description="没有指定格子的位置，则自动布局"
            type="success"
            :closable="false"
        >
        </el-alert>
        <el-form>
            <el-form-item label="grid-auto-flow 没有指定位置则自动布局">
                <el-radio-group v-model="grid3AutoFlow">
                    <el-radio label="row">row（依次水平排列优先）</el-radio>
                    <el-radio label="column">column（依次垂直排列优先）</el-radio>
                    <el-radio label="row dense">row dense</el-radio>
                    <el-radio label="column dense">column dense</el-radio>
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
        <div>item-1与item-2固定 都是 grid-column: 1/3;</div>
        <div
            class="gridbox gridbox4"
            :style="{
                    'grid-auto-flow': grid3AutoFlow, 
                    'grid-auto-rows': grid4AutoRows,
                    'grid-auto-columns': grid4AutoColumns
                }"
        >
            <div
                v-for="item in 9"
                :key="item"
                class="item"
                :class="'item-'+item"
            >{{item}}</div>
        </div>

        <div>dense这个英文是稠密的意思。如果有设置，则表示自动排列启用“密集”打包算法。如果稍后出现的网格比较小，则尝试看看前面有没有合适的地方放置，使网格尽可能稠密紧凑。此属性值仅仅改变视觉顺序，会导致DOM属性和实际呈现顺序不符合，这对于可访问性是不友好的，建议谨慎使用。</div>
        <ul>
            <li>没有设置区域，默认都占一格</li>
            <li>选中row，水平排列，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面</li>
            <li>选中column，垂直排列</li>
            <li>选中row dense，水平排列，同时前面有空就钻。所以会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行</li>
            <li>选中column dense，垂直排列，会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列</li>
        </ul>
        <h3>示例2：</h3>
        <div>布局： 1fr 1fr 1fr/1fr 2fr 2fr 1fr 2fr</div>
        <div
            class="gridbox gridbox3"
            :style="{
                    'grid-auto-flow': grid3AutoFlow, 
                }"
        >
            <div class="item-a purplecolor">葡萄item-1固定位置 grid-column: 1;grid-row: 2 / 4;</div>
            <div class="item-b yellowcolor">香蕉item-2固定位置 grid-row: 1 / 3;</div>
            <div class="item-c greencolor">猕猴桃item-3</div>
            <div class="item-d redcolor">西瓜item-4</div>
            <div class="item-e bluecolor">蓝莓item-5</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                grid3AutoFlow: 'row',
                grid4AutoRows: 'auto',
                grid4AutoColumns: 'auto'
            };
        },
        methods: {}
    };
</script>
<style scoped>
.gridbox {
    display: grid;
    margin-bottom: 20px;
}
.gridbox div {
    /* outline: 1px dotted; */
}
.gridbox3 {
    grid-template: 1fr 1fr 1fr/1fr 2fr 2fr 1fr 2fr;
    height: 300px;
    background: #f0f1f2;
    padding: 10px;
}
.item-a {
    grid-column: 1;
    grid-row: 2 / 4;
}
.item-b {
    grid-row: 1 / 3;
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

.grid1-item-a {
    /* grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3; */
    /* grid-column: 2 / 3;
    grid-row: 1 / 3; */
    grid-area: 1 / 2 / 3 / 3;
}
.grid1-item-b {
    /* grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 3;
    grid-row-end: 5; */
    grid-column: 1 / span 3;
    grid-row: 3 / 5;
}

/* gridbox4 */
.gridbox4 {
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    background: #eee;
    padding: 10px;
}

.item {
    font-size: 4em;
    text-align: center;
    /* border: 1px solid #e5e4e9; */
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
