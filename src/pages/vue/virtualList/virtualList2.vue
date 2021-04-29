<!--
 * @author: kangxue
 * @Date: 2021-04-29 10:27:12
 * @LastEditors: kangxue
 * @LastEditTime: 2021-04-29 11:14:47
 * @description: file content
-->
<template>
    <div>
        <el-button @click="add">增加</el-button>
        <div class="container"
            ref="container" @scroll="scrollListener">
            <div class="scroll-wrapper"
                :style="style">
                <div v-for="(item, index) in scrollList"
                    :key="index"
                    class="item">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            startIndex: 0,
            //滚动过程显示的结束索引
            endIndex: 20,
            paddingTop: 0,
            paddingBottom: 0,
            allHeight: 0,
            //每一列的高度
            itemHeight: 30,
            //显示几条数据 
            showNum: 20, 
        };
    },
    computed: {
        scrollList() {
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
            const valLen = val.length;
            this.allHeight = valLen * 30;
            this.paddingBottom = this.allHeight - this.scrollList.length * 30;
        }
    },
    mounted() {
        //构造一个超长列表
        for (let i = 0; i < 100; i++) {
            this.list.push('列表' + (i+1));
        }
        //计算滚动容器高度
        this.$refs.container.style.height = this.itemHeight * this.showNum + 'px';
        // container.addEventListener('scroll', () => {
        //     const scrollTop = container.scrollTop;
        //     //开始的数组索引
        //     this.startIndex = Math.floor(scrollTop / this.itemHeight);
        //     //结束索引
        //     this.endIndex = this.startIndex + this.showNum;

        //     this.paddingTop = scrollTop;
        //     if (this.endIndex >= this.list.length - 1) {
        //         this.paddingBottom = 0;
        //         return;
        //     }
        //     this.paddingBottom = this.allHeight - this.itemHeight * this.showNum - scrollTop;
        // });
    },
    methods: {
        scrollListener() {
            const scrollTop = this.$refs.container.scrollTop;
            //开始的数组索引
            this.startIndex = Math.floor(scrollTop / this.itemHeight);
            //结束索引
            this.endIndex = this.startIndex + this.showNum;

            this.paddingTop = scrollTop;
            if (this.endIndex >= this.list.length - 1) {
                this.paddingBottom = 0;
                return;
            }
            this.paddingBottom = this.allHeight - this.itemHeight * this.showNum - scrollTop;
        },
        add() {
            let len = this.list.length;
            for(let i = len ; i < 100 +len; i++){
                this.list.push('列表' + (i+1))
            }
        }
    }
};
</script>

<style scoped>
.container {
    width: 300px;
    overflow: auto;
    border: 1px solid;
    margin-top: 10px;
}
.item {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #aaa;
    padding-left: 20px;
}
</style>