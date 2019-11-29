<template>
    <div>
        <el-alert
            title="横纵格子分布"
            description="grid-template-columns和grid-template-rows 横纵格子分布"
            :closable="false"
            type="success"
        >
        </el-alert>
        <el-form>
            <el-form-item
                label="grid-template-columns"
                style="margin:0;"
            >
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
        <div>
            <pre>
        /* grid-area: name | row-start / column-start / row-end / column-end;  */
        /* grid-column: start-line / end-line | start-line / span value; */
        /* grid-row: start-line / end-line | start-line / span value; */
        .grid1-item-a{
            grid-area: 1 / 2 / 3 / 3;
        }
        .grid1-item-b{
            grid-column: 1 / span 3;
            grid-row: 3 / 5;
        }
                </pre>
        </div>
        <span>左边</span>
        <div
            class="gridbox gridbox1"
            :style="{'grid-template-columns': grid1Columns,'grid-template-rows': grid1Rows}"
        >
            <div class="grid1-item-a purplecolor">item-a</div>
            <div class="grid1-item-b yellowcolor">item-b</div>
        </div>
        <span>右边</span>
        <h4>测试fit-content()值</h4>
        <p>grid-template-columns: fit-content(400px) fit-content(400px) 1fr;</p>
        <div class="grid-fit">
            <div>Item as wide as the content.</div>
            <div>
                Item with more text in it. Because the contents of it are
                wider than the maximum width, it is clamped at 300 pixels.
            </div>
            <div>Flexible item</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: '1',
                alignArr1: ['stretch', 'start', 'end', 'center'],
                alignArr2: [
                    'stretch',
                    'start',
                    'end',
                    'center',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ],
                grid1Columns: null,
                grid1Rows: null,
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
    outline: 1px dotted;
}
.gridbox1 {
    height: 400px;
    background: rgb(196, 196, 196);
}

.purplecolor {
    background: #ddb6f9;
}
.yellowcolor {
    background: yellow;
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
.grid-fit {
    display: grid;
    grid-template-columns: fit-content(400px) fit-content(400px) 1fr;
    grid-gap: 5px;
    box-sizing: border-box;
    height: 200px;
    width: 100%;
    background-color: #8cffa0;
    padding: 10px;
}

.grid-fit > div {
    background-color: #8ca0ff;
    padding: 5px;
}
</style>
