<template>
    <div class="contentbox">
        <h3>身份证号码验证</h3>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="身份证">
                <el-input v-model="IDcard" placeholder="身份证号码" @blur="onSubmit"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div>测试结果：{{msg}}</div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            IDcard : '421302199109142360',
            msg : '',
        }
    },
    methods : {
        validateIdCard(idCard) {
            if(!idCard) {
                this.log("请输入身份证号码");
                return false;
            }

            const regIdCard1 = /^\d{15}$/;
            const regIdCard2 = /^\d{17}(\d|x|X)$/;
            if(!regIdCard1.test(idCard) && !regIdCard2.test(idCard)) {
                this.log("身份证号码错误");
                return false;
            }

            //校验地区，身份证前两位，可以选择性校验  
            const city = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江 ",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北 ",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏 ",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外 "
            };
            if (!city[idCard.substr(0, 2)]) {
                this.log("身份证号码错误");
                return false;
            }

            //如果通过以上验证，说明身份证格式正确，但准确性还需计算，主要计算校验码
            if (idCard.length == 18) {
                const idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
                const idCardY = new Array(1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                for (var i = 0; i < 17; i++) {
                    idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
                }
                var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
                var idCardLast = idCard.substring(17); //得到最后一位身份证号码
                idCardLast = idCardLast.toUpperCase();
                if (idCardLast == idCardY[idCardMod]) {
                    this.log("恭喜通过验证啦！");
                } else {
                    this.log("身份证号码错误！");
                    return false;
                }
            }
        },
        log(msg) {
            this.msg = msg;
        },
        onSubmit() {
            this.validateIdCard(this.IDcard);
        }
    },
    mounted(){
        
    }
}
</script>
<style scoped>
.contentbox{
    text-align: center;
}
</style>

