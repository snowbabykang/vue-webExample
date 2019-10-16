<template>
    <div class="contentbox">
        <div>先看toFixed使用的计算规则是：</div>
        <div>银行家舍入：所谓银行家舍入法，其实质是一种四舍六入五取偶（又称四舍六入五留双）法。</div>
        <div>简单来说就是：四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一。</div>
        <h3>toFixed测试</h3>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="测试值">
                <el-input v-model="value" placeholder="测试值" @blur="onSubmit"></el-input>
            </el-form-item>
        </el-form>
        <div>原生测试结果：{{oldmsg}} </div> 
        <div>修改的toFixed测试：{{newmsg}}</div> 
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            class="mytable"
            :row-class-name="tableRowClassName">
            <el-table-column
                prop="oldvalue"
                label="原值x">
            </el-table-column>
            <el-table-column
                prop="newvalue"
                label="应值">
            </el-table-column>
            <el-table-column
                label="Number(x).toFixed(2)">
                <template slot-scope="scope">
                    {{Number(scope.row.oldvalue).toFixed(2)}}
                </template>
            </el-table-column>
            <el-table-column
                label="使用修改后的方法toFixed(x,2)">
                <template slot-scope="scope">
                    {{toFixed(scope.row.oldvalue,2)}}
                </template>
            </el-table-column>
        </el-table>

        <!-- console.group('以4为舍入位');
        console.log("0.004保留两位小数= "+ Number(0.004).toFixed(2) + "--修改后结果为--" + toFixed(0.004,2));
        console.log("0.014保留两位小数= "+ Number(0.014).toFixed(2) + "--修改后结果为--" + toFixed(0.014,2));
        console.log("0.094保留两位小数= "+ Number(0.094).toFixed(2) + "--修改后结果为--" + toFixed(0.094,2));
        console.groupEnd();
        console.group('以6为舍入位');
        console.log("0.006保留两位小数= "+ Number(0.006).toFixed(2) + "--修改后结果为--" + toFixed(0.006,2));
        console.log("0.016保留两位小数= "+ Number(0.016).toFixed(2) + "--修改后结果为--" + toFixed(0.016,2));
        console.log("0.096保留两位小数= "+ Number(0.096).toFixed(2) + "--修改后结果为--" + toFixed(0.096,2));
        console.groupEnd();
        console.group('以5为舍入位,5后非零');
        console.log("0.0051保留两位小数= "+ Number(0.0051).toFixed(2) + "--修改后结果为--" + toFixed(0.0051,2));
        console.log("0.0052保留两位小数= "+ Number(0.0052).toFixed(2) + "--修改后结果为--" + toFixed(0.0052,2));
        console.log("0.0059保留两位小数= "+ Number(0.0059).toFixed(2) + "--修改后结果为--" + toFixed(0.0059,2));
        console.groupEnd();
        console.group('以5为舍入位,5后为零');
        console.log("0.005保留两位小数= "+ Number(0.005).toFixed(2) + "--修改后结果为--" + toFixed(0.005,2));
        console.log("0.015保留两位小数= "+ Number(0.015).toFixed(2) + "--修改后结果为--" + toFixed(0.015,2));
        console.log("0.025保留两位小数= "+ Number(0.025).toFixed(2) + "--修改后结果为--" + toFixed(0.025,2));
        console.log("0.035保留两位小数= "+ Number(0.035).toFixed(2) + "--修改后结果为--" + toFixed(0.035,2));
        console.log("0.045保留两位小数= "+ Number(0.045).toFixed(2) + "--修改后结果为--" + toFixed(0.045,2));
        console.log("0.055保留两位小数= "+ Number(0.055).toFixed(2) + "--修改后结果为--" + toFixed(0.055,2));
        console.log("0.065保留两位小数= "+ Number(0.065).toFixed(2) + "--修改后结果为--" + toFixed(0.065,2));
        console.log("0.075保留两位小数= "+ Number(0.075).toFixed(2) + "--修改后结果为--" + toFixed(0.075,2));
        console.log("0.085保留两位小数= "+ Number(0.085).toFixed(2) + "--修改后结果为--" + toFixed(0.085,2));
        console.log("0.095保留两位小数= "+ Number(0.095).toFixed(2) + "--修改后结果为--" + toFixed(0.095,2)); -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData : [
                {oldvalue: 0.005, newvalue: 0.01},
                {oldvalue: 0.015, newvalue: 0.02},
                {oldvalue: 0.025, newvalue: 0.03},
                {oldvalue: 0.035, newvalue: 0.04},
                {oldvalue: 0.045, newvalue: 0.05},
                {oldvalue: 0.055, newvalue: 0.06},
                {oldvalue: 0.065, newvalue: 0.07},
                {oldvalue: 0.075, newvalue: 0.08},
                {oldvalue: 0.085, newvalue: 0.09},
                {oldvalue: 0.095, newvalue: 0.10},
                {oldvalue: 0.145, newvalue: 0.15},
            ],
            value: null,
            oldmsg: null,
            newmsg: null,
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
        onSubmit() {
            let value = this.value;
            if(!value){
                return false;
            }
            this.oldmsg = Number(value).toFixed(2);
            this.newmsg = this.toFixed(value,2);
        }
    }
}
</script>
<style scoped>
.contentbox{
    padding: 30px;
}
.mytable >>> .success-row {
    background: #f0f9eb;
}
</style>
