<template>
    <div style="height: 640px;overflow:auto;">
        <div class="wrap">
            <div class="main bluecolor">
                <div>粘连布局特点</div>
                <ul>
                    <li>有一块内容main，当main的高足够长的时候，紧跟在main后面的元素footer会跟在main元素的后面。</li>
                    <li>当main元素比较短的时候(比如小于屏幕的高度)，我们期望这个footer元素能够“粘连”在屏幕的底部</li>
                </ul>
                <div>
                    <p>实现步骤：</p>
                    <p>(1)footer必须是一个独立的结构，与wrap没有任何嵌套关系</p>
                    <p>(2)wrap区域的高度通过设置min-height，变为视口高度</p>
                    <p>(3)footer要使用margin为负来确定自己的位置</p>
                    <p>(4)在main区域需要设置 padding-bottom。这也是为了防止负 margin 导致 footer 覆盖任何实际内容。</p>
                </div>
                <el-button
                    type="primary"
                    @click="add()"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            main: 1
        };
    },
    methods: {
        add() {
            this.main += 1;
        }
    }
};
</script>

<style scoped lang="less">
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
</style>