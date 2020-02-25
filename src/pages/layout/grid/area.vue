<template>
    <div>
        <el-form>
            <el-form-item label="网格单元间隔grid-gap">
                <el-input
                    v-model="gridGap"
                    style="width:200px;"
                ></el-input>
            </el-form-item>
            <el-alert
                title="grid-template-areas 划分区域"
                description="网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值"
                type="success"
                :closable="false">
            </el-alert>
        
            <div>
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
                <el-form-item label="是否测试子元素对齐方式" style="margin:0;">
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
            <el-form-item label="网格小于容器设置" style="margin:0;">
                <el-radio-group v-model="grid2ClassName">
                    <el-radio label="equal">网格整体大小 = 容器大小</el-radio>
                    <el-radio label="lt">网格整体大小 < 容器大小</el-radio>
                </el-radio-group>
            </el-form-item>
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
        <div class="gridbox" :class="grid2ClassName"
            :style="{
                'justify-items': grid2JustifyItems, 
                'align-items' : grid2AlignItems,
                'justify-content' : grid2JustifyContent,
                'align-content' : grid2AlignContent,
                'grid-gap' : gridGap,
            }">
            <div class="grape purplecolor">葡萄</div>
            <div class="banana yellowcolor">香蕉</div>
            <div class="kiwi greencolor" :style="isgrid2Self == 1 ? {
                'justify-self': grid2JustifySelf, 
                'align-self' : grid2AlignSelf,
            } : {}">猕猴桃</div>
            <div class="melon redcolor">西瓜</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            gridGap: '0px 0px',
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
    height: 600px;
    background: #f0f1f2;
}
.gridbox div{
    outline: 1px dotted;
}
.gridbox.equal{
    grid-template: 
        "grape grape grape" 1fr 
        "banana 猕猴桃 猕猴桃" 1fr 
        "banana 猕猴桃 猕猴桃" 1fr 
        "melon melon melon" 1fr
        /1fr 1fr 1fr;
}
.gridbox.lt{
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

.purplecolor { background: #ddb6f9;}
.yellowcolor { background: yellow; }
.greencolor { background: yellowgreen;}
.redcolor { background: #f79e9e;}
.bluecolor { background: #75d1ff;}
</style>
