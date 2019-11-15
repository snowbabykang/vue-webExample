<template>
    <div class="contentbox">
    
        <h3>小数计算误差测试</h3>
        <el-form :inline="true" v-for="(item,key) in decimal" :key="key">
            <el-form-item :label="item.name+'计算'">
                <el-input v-model="decimal[key].value1"></el-input>
            </el-form-item>
            <el-form-item :label="item.icon">
                <el-input v-model="decimal[key].value2"></el-input>
            </el-form-item>
            <el-form-item label="=">
                <el-input readonly v-model="decimal[key].result"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" @click="onSubmit(key)">结果</el-button>
            </el-form-item>
        </el-form>
        
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            class="mytable"
            :row-class-name="tableRowClassName">
            <el-table-column
                prop="value1"
                label="值a"
                width="150px">
            </el-table-column>
            <el-table-column
                prop="value2"
                label="值b"
                width="150px">
            </el-table-column>
            <el-table-column
                label="计算公式应得值">
                <template slot-scope="scope">
                    {{scope.row.value1}} {{scope.row.icon}} {{scope.row.value2}} = {{scope.row.newvalue}} 
                </template>
            </el-table-column>
            <el-table-column
                label="直接计算">
                <template slot-scope="scope">
                    {{eval(scope.row)}}
                </template>
            </el-table-column>
            <el-table-column
                label="精确计算">
                <template slot-scope="scope">
                    {{operation(scope.row.value1,scope.row.value2,scope.row.opt)}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            decimal : {
                add : {value1: null, value2: null, result: null, name: '加法',icon: '+'},
                subtract : {value1: null, value2: null, result: null, name: '减法',icon: '-'},
                multiply : {value1: null, value2: null, result: null, name: '乘法',icon: '*'},
                divide : {value1: null, value2: null, result: null, name: '除法',icon: '/'},
            },
            tableData : [
                {value1: 0.1, value2: 0.2, icon: '+', opt: 'add', newvalue: 0.3},
                {value1: 18.6, value2: 8, icon: '-', opt: 'subtract', newvalue: 10.6},
                {value1: 199, value2: 0.2, icon: '*', opt: 'multiply', newvalue: 39.8},
                {value1: 133.5, value2: 0.21, icon: '/', opt: 'divide', newvalue: 635.71},
                {value1: 0.58, value2: 100, icon: '*', opt: 'multiply', newvalue: 58},
                {value1: 18, value2: 0.58, icon: '-', opt: 'subtract', newvalue: 17.42},
            ],
        }
    },
    methods: {
        operation(a, b, op) {
            var t1,t2,r1,r2,m;  
            try{
                t1 = a.toString().split(".")[1].length;
            }catch(e){
                t1 = 0;
            };
            try{
                t2 = b.toString().split(".")[1].length;
            }catch(e){
                t2 = 0;
            }; 
            r1 = Number(a.toString().replace(".",""));
            r2 = Number(b.toString().replace(".",""));
            m=Math.pow(10,Math.max(t1,t2));
            switch (op) {
                case 'add':
                    return (a*m+b*m)/m;
                case 'subtract':
                    // console.log("10的最大幂次值="+m);
                    // console.log(a*m);
                    // console.log(b*m);
                    // console.log(a*m-b*m);
                    // console.log((a*m-b*m)/m);
                    return (a*m-b*m)/m;
                case 'multiply':
                    var max = t1 + t2;
                    return r1*r2/Math.pow(10,max);
                case 'divide':
                    return (r1/r2)*Math.pow(10,t2-t1);  
            }
        },
        toFixed(num, s) {
            var times = Math.pow(10, s);
            num = this.operation(num, 100,'multiply');
            var des = this.operation(num, 0.5,'add');
            des = parseInt(des, 10)/times;
            return des + ''
        },
        tableRowClassName({row, rowIndex}) {
            if(row.newvalue == Number(row.oldvalue).toFixed(2) && row.newvalue == this.toFixed(row.oldvalue,2)){
                return 'success-row';
            }
            return '';
        },
        onSubmit(opt) {
            let a = this.decimal[opt].value1;
            let b = this.decimal[opt].value2;
            if(a == null || a == '' || b == null || b == ''){
                return false;
            }
            this.decimal[opt].result = this.operation(a, b, opt);
        },
        eval(row) {
            return eval(row.value1+row.icon+row.value2);
        }
    }
}
</script>
<style scoped>
.mytable >>> .success-row {
    background: #f0f9eb;
}
</style>
