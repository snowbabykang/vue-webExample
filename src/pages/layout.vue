<template>
    <el-tabs
        v-model="activeName"
        type="border-card"
        class="contentbox"
    >
        <el-tab-pane
            v-for="item in tabArr" :key="item.id"
            :name="'tab_'+item.id"
            :label="item.name"
        ></el-tab-pane>
        <keep-alive>
            <div style="min-height:640px;">
                <div :is="activeName"></div>
            </div>
        </keep-alive>
    </el-tabs>
</template>

<script>
    import simple from '@/pages/layout/simple';
    import float from '@/pages/layout/float';
    import table from '@/pages/layout/table';
    import box from '@/pages/layout/box';
    import flex from '@/pages/layout/flex';
    import grid from '@/pages/layout/grid';
    import tableDynamic from '@/pages/layout/tableDynamic';
    import dynamic from '@/pages/layout/dynamic';
    import grail from '@/pages/layout/grail';
    import both from '@/pages/layout/both';
    export default {
        data() {
            return {
                activeName: 'tab_1',
                tabArr: [
                    { id: 1, name: '单列布局' },
                    { id: 2, name: 'float双列布局' },
                    { id: 3, name: 'table双列布局' },
                    { id: 4, name: 'box双列布局' },
                    { id: 5, name: 'flex双列布局' },
                    { id: 6, name: 'grid布局' },
                    { id: 8, name: '粘连布局' },
                    { id: 7, name: 'table动态高度的页脚' },
                    { id: 9, name: '圣杯布局' },
                    { id: 10, name: '双飞翼布局' },
                ]
            };
        },
        components: {
            tab_1: simple,
            tab_2: float,
            tab_3: table,
            tab_4: box,
            tab_5: flex,
            tab_6: grid,
            tab_7: tableDynamic,
            tab_8: dynamic,
            tab_9: grail,
            tab_10: both,
        }
    };
</script>
<style lang="less">
.leftbg {
    background: #a0b3d6;
    padding: 10px;
}
.rightbg {
    background: #ffe6b8;
    padding: 10px;
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
</style>
