<template>
    <div class="contentbox">
        <el-form label-width="200px">
            <el-form-item label="盒子宽度">
                <el-input
                    v-model="columnW"
                    style="width:200px;"
                ></el-input>
            </el-form-item>
            <el-form-item label="盒子高度">
                <el-input
                    v-model="columnHeight"
                    style="width:200px;"
                ></el-input>
            </el-form-item>
            <el-form-item label="每一栏宽度column-width">
                <el-radio-group v-model="columnWidth">
                    <el-radio label="auto">auto</el-radio>
                    <el-radio label="8%">8%无效</el-radio>
                    <el-radio label="80px">80px</el-radio>
                    <el-radio label="8em">8em</el-radio>
                    <el-radio label="200px">200px</el-radio>
                    <el-radio label="1000px">1000px</el-radio>
                    <el-radio label="1600px">1600px</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="分栏数目column-count">
                <el-radio-group v-model="columnCount">
                    <el-radio label="auto">auto</el-radio>
                    <el-radio label="2">2</el-radio>
                    <el-radio label="4">4</el-radio>
                    <el-radio label="8">8</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-alert
                type="success"
                title="column-count与column-width都有可能有更高的优先级，优先级计算诀窍就是统一转换column-count值，哪个小就使用哪一个"
            ></el-alert>
            <el-form-item label="分割线样式column-rule-style">
                <el-radio-group v-model="columnRuleStyle">
                    <el-radio
                        :label="item"
                        v-for="item in ruleStyleArr"
                        :key="item"
                    >{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="间隙宽度column-gap">
                <el-input
                    v-model="columnGap"
                    style="width:200px;"
                ></el-input>
                <span>支持em、px、百分比，不支持负值</span>
            </el-form-item>
            <el-form-item label="多列布局中断break-inside">
                <el-radio-group v-model="breakInside">
                    <el-radio
                        :label="item"
                        v-for="item in breakInsideArr"
                        :key="item"
                    >{{item}}</el-radio>
                </el-radio-group>
                <span>谷歌切换无效，火狐才有效</span>
            </el-form-item>
            <el-form-item label="box-decoration-break">
                <el-switch
                    v-model="boxbreak"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                >
                </el-switch>
                <span>谷歌无效，应该支持但确实无效</span>
            </el-form-item>
        </el-form>
        <!-- 'column-rule-width': '1px', -->
        <div
            class="columnbox"
            :class="['column-'+breakInside, boxbreak ? 'boxbreak' : '']"
            :style="{
            'column-rule-style': columnRuleStyle,
            'column-rule-color': 'red',
            'width': columnW,
            'height': columnHeight,
            'column-gap': columnGap,
            'column-width': columnWidth, 
            'columnCount': columnCount
            }"
            v-html="html"
        >
        </div>
    </div>
</template>
<script>
    const html =
        '<li><div>【荷塘月色】</div>这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。</li>' +
        '<div class="column-span" style="background: rgb(245, 163, 56);margin: 10px;">column-span: all 横跨列，横跨所有宽度</div>' +
        '<li>沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路;白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。</li>' +
        '<li>路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。</li>' +
        '<li>曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的;正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉的流水，遮住了，不能见一些颜色;而叶子却更见风致了。</li>' +
        '<li>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样;又像笼着轻纱的梦。虽然是满月，天上却有一层淡淡的云，所以不能朗照;但我以为这恰是到了好处--酣眠固不可少，小睡也别有风味的。月光是隔了树照过来的，高处丛生的灌木，落下参差的斑驳的黑影，峭楞楞如鬼一般;弯弯的杨柳的稀疏的倩影，却又像是画在荷叶上。塘中的月色并不均匀;但光与影有着和谐的旋律，如梵婀玲上奏着的名曲。</li>' +
        '<li>荷塘的四面，远远近近，高高低低都是树，而杨柳最多。这些树将一片荷塘重重围住;只在小路一旁，漏着几段空隙，像是特为月光留下的。树色一例是阴阴的，乍看像一团烟雾;但杨柳的丰姿，便在烟雾里也辨得出。树梢上隐隐约约的是一带远山，只有些大意罢了。树缝里也漏着一两点路灯光，没精打采的，是渴睡人的眼。这时候最热闹的，要数树上的蝉声与水里的蛙声;但热闹是它们的，我什么也没有。</li>' +
        '<li>忽然想起采莲的事情来了。采莲是江南的旧俗，似乎很早就有，而六朝时为盛;从诗歌里可以约略知道。采莲的是少年的女子，她们是荡着小船，唱着艳歌去的。采莲人不用说很多，还有看采莲的人。那是一个热闹的季节，也是一个风流的季节。梁元帝《采莲赋》里说得好：</li>' +
        '<li>于是妖童媛女，荡舟心许;鷁首徐回，兼传羽杯;欋将移而藻挂，船欲动而萍开。尔其纤腰束素，迁延顾步;夏始春余，叶嫩花初，恐沾裳而浅笑，畏倾船而敛裾。</li>' +
        '<li>可见当时嬉游的光景了。这真是有趣的事，可惜我们现在早已无福消受了。</li>' +
        '<li><div>于是又记起《西洲曲》里的句子：</div>采莲南塘秋，莲花过人头;低头弄莲子，莲子清如水。今晚若有采莲人，这儿的莲花也算得过人头了;只不见一些流水的影子，是不行的。这令我到底惦着江南了。--这样想着，猛一抬头，不觉已是自己的门前;轻轻地推门进去，什么声息也没有，妻已睡熟好久了。</li>';
    export default {
        data() {
            return {
                html: html,
                columnW: '100%',
                columnHeight: 'auto',
                columnWidth: 'auto',
                columnCount: 'auto',
                columnsVal: 'auto',
                columnRuleStyle: 'none',
                ruleStyleArr: [
                    'none',
                    'hidden',
                    'dotted',
                    'dashed',
                    'solid',
                    'double'
                ],
                columnGap: 'normal',
                breakInside: 'auto',
                breakInsideArr: [
                    'auto',
                    'avoid',
                    'avoid-page',
                    'avoid-column',
                    'avoid-region'
                ],
                boxbreak: false
            };
        },
        methods: {}
    };
</script>
<style scoped>
.contentbox .el-form-item {
    margin: 0;
}
.columnbox {
    text-indent: 2em;
    border: 1px solid rgb(0, 85, 51);
    list-style: none;
    padding: 0;
    margin-top: 20px;
}
.columnbox >>> li {
    list-style: none;
    background: #f0f1f2f3;
    padding: 1em;
    margin: 0 0 1.3em;
    border-radius: 10px;
    /* -webkit-column-break-inside: avoid;
    page-break-inside: avoid; */
    /* break-inside: auto; */
}
.boxbreak >>> li {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}
.column-auto >>> li {
    break-inside: auto;
    -webkit-break-inside: auto;
}
.column-avoid >>> li {
    break-inside: avoid;
    -webkit-break-inside: avoid;
    /* -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    -webkit-break-inside: avoid; */
}
.column-avoid-page >>> li {
    break-inside: avoid-page;
}
.column-avoid-column >>> li {
    break-inside: avoid-column;
}
.column-avoid-region >>> li {
    break-inside: avoid-region;
}
.column-span {
    background: rgb(245, 163, 56);
    margin: 10px;
}
</style>
