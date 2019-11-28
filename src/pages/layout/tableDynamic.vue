<template>
    <div style="height: 640px;">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
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

<style scoped>
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
</style>