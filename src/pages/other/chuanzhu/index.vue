<!--
 * @author: kangxue
 * @Date: 2022-02-11 14:36:10
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-15 11:47:03
 * @description: 串珠生成图
-->
<template>
    <div>

        <el-form :inline="true"
            :model="form">
            <el-form-item label="串珠单行个数">
                <el-input-number v-model="form.lineVal" :min="1" :max="12"></el-input-number>
            </el-form-item>
            <el-form-item label="背景色">
                <el-color-picker v-model="form.bgColor"></el-color-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="createModel">生成模板</el-button>
            </el-form-item>
            <el-form-item label="笔触色">
                <el-color-picker v-model="cellColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="常用色">
                <span class="cell color-box" v-for="item in colorList" :key="item" :style="{'backgroundColor': item}" @click="setPenColor(item)"></span>
            </el-form-item>
        </el-form>
        <div>设置好模板后，设置笔触色，点击单元格上色</div>
        <div class="model-area">
            <div v-for="(row, index) in modelList"
                :key="index">
                <div>
                    <span v-for="(col, key) in row"
                        :key="key"
                        class="cell"
                        :style="{'backgroundColor': col.color || form.bgColor}"
                        @click="setColor(index, key)"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                lineVal: 8,
                bgColor: '#409EFF'
            },
            cellColor: '#f00',
            modelList: []
        };
    },
    created() {
        this.colorList = ['black', 'white','red', '#f97dc2', '#50befa', '#5316b3', '#f035a7', '#fa9d3b'];
    },
    methods: {
        // 生成模板
        createModel() {
            let arr = [];
            let lineVal = this.form.lineVal;
            // const arr1 = new Array(lineVal).fill({ value: 1, color: '' });
            // const arr2 = new Array(lineVal + 1).fill({ value: 1, color: '' });
            for (let i = 0; i < lineVal; i++) {
                let arr1 = [],
                    arr2 = [];
                for (let j = 0; j < lineVal; j++) {
                    arr1.push({ value: i + '_' + j, color: '' });
                }
                for (let j = 0; j < lineVal + 1; j++) {
                    arr2.push({ value: i + '_' + j, color: '' });
                }
                arr.push(arr1);
                arr.push(arr2);
            }
            let arr3 = [];
            for (let j = 0; j < lineVal; j++) {
                arr3.push({ value: lineVal + '_' + j, color: '' });
            }
            arr.push(arr3);
            this.modelList = arr;
        },
        // 上色
        setColor(index, key) {
            console.log(index, key, this.modelList);
            this.modelList[index][key].color = this.cellColor;
        },
        setPenColor(color) {
            this.cellColor = color;
        }
    }
};
</script>
<style lang="less" scoped>
.model-area {
    text-align: center;
}
.cell {
    display: inline-block;
    width: 30px;
    height: 25px;
    margin: 0 10px;
    border: 1px solid #eee;
    vertical-align: top;
    &.color-box {
        height: 30px;
        vertical-align: middle;
    }
}
</style>