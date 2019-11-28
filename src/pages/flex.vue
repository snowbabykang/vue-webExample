<template>
    <div>
    <!-- <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            label="属性测试"
            name="1"
        > -->
            <el-form>
                <el-form-item
                    label="布局方向flex-direction"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexDirection">
                        <el-radio
                            :label="item"
                            v-for="item in flexDirectionArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="是否换行flex-wrap"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexWrap">
                        <el-radio
                            :label="item"
                            v-for="item in flexWrapArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="文档流"
                    style="margin:0;"
                >
                    <el-radio-group v-model="direction">
                        <el-radio label="ltr">ltr 左 ——> 右</el-radio>
                        <el-radio label="rtl">rtl 右 ——> 左</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="水平对齐justify-content"
                    style="margin:0;"
                >
                    <el-radio-group v-model="justifyContent">
                        <el-radio
                            :label="item"
                            v-for="item in justifyContentArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-alert type="success">baseline相当于基线，比如图片底部，文字基线（下边缘）</el-alert>
                <el-form-item
                    label="垂直对齐align-items"
                    style="margin:0;"
                >
                    <el-radio-group v-model="alignItems">
                        <el-radio
                            :label="item"
                            v-for="item in alignItemsArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-alert type="success">align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</el-alert>
                <el-form-item
                    label="多轴线垂直对齐align-content"
                    style="margin:0;"
                >
                    <el-radio-group v-model="alignContent">
                        <el-radio
                            :label="item"
                            v-for="item in alignContentArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>

            <div
                class="container"
                :style="{
                'flex-direction' : flexDirection,
                'direction': direction,
                'flex-wrap' : flexWrap,
                'justify-content' : justifyContent,
                'align-items' : alignItems,
                'align-content' : alignContent
            }"
            >
                <div
                    class="flex-item"
                    v-for="item in 10"
                    :key="item"
                    :class="'item-'+item"
                    :style="{
                    'order': item == 3 ? order3 : (item == 5 ? order5 : (item == 8 ? order8 : 0)),
                    'flex-grow' : item == 2 ? flexGrow : 0,
                    'flex-shrink' : item === 1 ? flexShrink1 : flexShrink,
                    'flex-basis': flexBasis && item == 2 ? flexBasis : (!flexShrinkWidth ? (flexWrap !== 'nowrap' ? '150px' : 'auto') : '200px'),
                    'align-self': item == 2 ? alignSelf : 'auto',
                }"
                >
                    <div class="flex-info">{{item}}</div>
                </div>
            </div>
            <el-form>
                <el-form-item
                    label="item-3的排序order"
                    style="margin:0;"
                >
                    <el-input
                        v-model="order3"
                        style="width:200px;"
                    ></el-input>
                    <span>item-5的排序order：</span>
                    <el-input
                        v-model="order5"
                        style="width:200px;"
                    ></el-input>
                    <span>item-8的排序order：</span>
                    <el-input
                        v-model="order8"
                        style="width:200px;"
                    ></el-input>
                </el-form-item>
                <el-alert type="success" title="flex-grow不支持负值，如果flex-grow值小于1，则扩展的空间就总剩余空间和这个比例的计算值；如果flex-grow值大于1，则独享所有剩余空间。"></el-alert>
                <el-form-item
                    label="item-2的flex-grow"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexGrow">
                        <el-radio
                            :label="item"
                            v-for="item in flexGrowArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-alert type="success" title="测试flex-shrink时将每个子项宽度定义为200px；flex-shrink默认=1表示都会收缩"></el-alert>
                <el-form-item
                    label="所有子项的宽度，设置flex-shrink才调整"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexShrinkWidth">
                        <el-radio :label="0">默认自适应</el-radio>
                        <el-radio :label="1">设置200px</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="所有子项的flex-shrink"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexShrink">
                        <el-radio
                            :label="item"
                            v-for="item in flexShrinkArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="item-1的flex-shrink"
                    style="margin:0;"
                >
                    <el-radio-group v-model="flexShrink1">
                        <el-radio
                            :label="item"
                            v-for="item in flexShrinkArr1"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div class="shrinkbox">
                    <p>首先：父容器百分百宽度是1125px，每个子项的flex-basis是200px；10个子项是2000px，超出父元素875px；</p>
                    <p>超出的875px需要被子项消化收缩，计算需要收缩的量值</p>
                    <p>公式= item的shrink值/总shrink值 * 超出的值</p>
                    <p>如果item-1选择0.8，则item-1的收缩值= 0.8/9.8*875 = 71.428...</p>
                    <p>所以item-1收缩后的值是200-71.42=128.57...</p>
                    <p>其他item收缩后的值是200- 1/9.8*875=110.71</p>
                </div>
                <el-form-item
                    label="item-2的flex-basis"
                    style="margin:0;"
                >
                    <el-input
                        v-model="flexBasis"
                        style="width:200px;"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="item-2垂直对齐align-self"
                    style="margin:0;"
                >
                    <el-radio-group v-model="alignSelf">
                        <el-radio
                            :label="item"
                            v-for="item in alignSelfArr"
                            :key="item"
                        >{{item}}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </div>
        <!-- </el-tab-pane>
    </el-tabs> -->
</template>

<script>
    export default {
        data() {
            return {
                activeName: '1',
                flexDirection: 'row',
                flexDirectionArr: [
                    'row',
                    'row-reverse',
                    'column',
                    'column-reverse'
                ],
                direction: 'ltr',
                flexWrap: 'nowrap',
                flexWrapArr: ['nowrap', 'wrap', 'wrap-reverse'],
                justifyContent: 'flex-start',
                justifyContentArr: [
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ],
                alignItems: 'stretch',
                alignItemsArr: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline'
                ],
                alignContent: 'stretch',
                alignContentArr: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ],
                order3: 0,
                order5: 0,
                order8: 0,
                flexGrow: 0,
                flexGrowArr: [0, -1, 1, 2, 0.5],
                flexShrinkWidth: 0,
                flexShrink: 1,
                flexShrinkArr: [0, -1, 1, 2, 0.5],
                flexShrink1: 1,
                flexShrinkArr1: [0, -1, 1, 2, 0.5, 0.8],
                flexBasis: '',
                alignSelf: 'auto',
                alignSelfArr: [
                    'auto',
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline'
                ]
            };
        },
        methods: {}
    };
</script>
<style scoped>
.container {
    display: flex;
    background: #fff;
    border: 2px solid #ffb202;
    /* width: 1350px; */
    min-height: 400px;
    overflow: hidden;
    margin: 10px 0 20px;
}
.container .flex-item {
    background: radial-gradient(circle, #ffffff, #dbeafe 70%, #98c5fe);
    padding: 20px 10px;
    text-align: center;
}
.container .flex-info {
    width: 80px;
    height: 80px;
    display: inline-block;
    line-height: 80px;
    font-size: 30px;
    font-weight: bold;
    background: #ffb202;
    color: #fff;
    text-align: center;
    border-radius: 100%;
}
.container .flex-item:nth-child(2n + 1) .flex-info {
    line-height: 100px;
}
.item-3 .flex-info {
    background: #ff9d7a;
}
.item-5 .flex-info {
    background: #d66274;
}
.item-8 .flex-info {
    background: #9b0034;
}
.shrinkbox {
    padding: 10px;
    background: #f0f1f2;
    margin-bottom: 10px;
}
</style>
