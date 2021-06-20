<!--
 * @author: kangxue
 * @Date: 2021-04-29 10:27:12
 * @LastEditors: kangxue
 * @LastEditTime: 2021-05-20 11:58:11
 * @description: file content
-->
<template>
    <div>
        <el-button @click="add">增加</el-button>
        <el-button @click="getInfo">获取list值</el-button>
        <div class="container"
            ref="container"
            @scroll="scrollListener">
            <div class="scroll-wrapper"
                :style="style">
                <div v-for="(item, index) in scrollList"
                    :key="index"
                    class="item">
                    <div class="title">{{item.title}}</div>
                    <div>
                        <el-input style="width: 150px;"
                            size="mini"
                            v-model="item.value"></el-input>
                        <el-button size="mini"
                            @click="deleteItem(index)"
                            type="danger">删除</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div>v-model中变更不触发computed，并不会触发list的watch，但是能直接获取list修改后的值；相当于输入值不会触发监听；应该是数组的slice导致</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            startIndex: 0,
            //滚动过程显示的结束索引
            endIndex: 10,
            paddingTop: 0,
            paddingBottom: 0,
            allHeight: 0,
            //每一列的高度
            itemHeight: 50,
            //显示几条数据
            showNum: 10
        };
    },
    computed: {
        scrollList() {
            console.log(this.startIndex, this.endIndex);
            return this.list.slice(this.startIndex, this.endIndex);
        },
        style() {
            return {
                paddingTop: this.paddingTop + 'px',
                paddingBottom: this.paddingBottom + 'px'
            };
        }
    },
    watch: {
        list(val) {
            console.log(val);
            const valLen = val.length;
            this.allHeight = valLen * this.itemHeight;
            this.paddingBottom = this.allHeight - this.scrollList.length * this.itemHeight;
        }
    },
    mounted() {
        //构造一个超长列表
        for (let i = 0; i < 100; i++) {
            this.list.push({
                title: '列表' + (i + 1),
                value: ''
            });
        }
        //计算滚动容器高度
        this.$refs.container.style.height = this.itemHeight * this.showNum + 'px';
    },
    methods: {
        scrollListener() {
            const scrollTop = this.$refs.container.scrollTop;
            //开始的数组索引
            this.startIndex = Math.floor(scrollTop / this.itemHeight);
            //结束索引
            this.endIndex = this.startIndex + this.showNum;

            this.paddingTop = scrollTop;
            if (this.endIndex >= this.list.length) {
                this.paddingTop = (this.endIndex - this.showNum) * this.itemHeight;
                this.paddingBottom = 0;
                return;
            }
            this.paddingBottom = this.allHeight - this.itemHeight * this.showNum - scrollTop;
        },
        add() {
            let len = this.list.length;
            for (let i = len; i < 100 + len; i++) {
                this.list.push('列表' + (i + 1));
            }
        },
        deleteItem(index) {
            console.log(this.startIndex, index);
            let del = this.startIndex + index;
            this.list.splice(del,1);
        },
        getInfo() {
            console.log(this.list);
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 500px;
    overflow: auto;
    border: 1px solid;
    margin-top: 10px;
}
.item {
    height: 50px;
    padding: 10px;
    border-bottom: 1px solid #aaa;
    display: flex;
    align-content: space-between;
    width: 100%;
    align-items: center;
    .title {
        flex: 1;
    }
}
</style>