<template>
    <div>
        <h3>示例1</h3>
        <div>watch：一个数据变化 ---> 多个数据全部变化
            <el-input v-model="shipName"></el-input>
        </div>
        <div>{{suoLong}}，{{naMei}}，{{qiaoBa}}</div>
        <h3>示例2</h3>
        <div>computed：一个数据受多个数据影响 ；可以随时修改三个值都会改变路飞的全民<el-button type="primary"
                @click="changeFirstName">修改路飞的姓</el-button>
        </div>
        <div>路飞的名字：{{luFei_Name}}</div>
        <h3>示例3</h3>
        <el-button type="primary"
            @click="getMethodsDate">触发methods方法</el-button>
        <el-button type="primary"
            @click="getComputedDate">获取computed计算的值</el-button>
        <div>为什么两次点击computed返回的时间是相同的呢？new Date()不是依赖型数据（不是放在data等对象下的实例数据），所以computed只提供了缓存的值，而没有重新计算</div>
        <div>只有符合：1.存在依赖型数据 2.依赖型数据发生改变这两个条件,computed才会重新计算。 </div>
        <h3>methods和computed对比</h3>
        <p>原始字符串: {{ message }}</p>
        <p>计算后反转字符串: {{ reversedMessage }}</p>
        <p>计算后反转字符串: {{ reversedMessage }}</p>
        <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>
        <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>
        <p>计算后反转字符串: {{ reversedMessage }}</p>
    </div>
</template>

<script>
let count = 1;
export default {
    data() {
        return {
            shipName: '草帽海贼团',
            suoLong: '草帽海贼团索隆',
            naMei: '草帽海贼团娜美',
            qiaoBa: '草帽海贼团乔巴',
            firstName: '蒙奇',
            secName: 'D',
            thirdName: '路飞',
            message: 'vue',
            time1: '111',
            time2: '222'
        };
    },
    watch: {
        shipName: function(newName) {
            this.suoLong = newName + '索隆';
            this.naMei = newName + '娜美';
            this.qiaoBa = newName + '乔巴';
        }
    },
    computed: {
        luFei_Name: function() {
            return this.firstName + this.secName + this.thirdName;
        },
        computedDate: function() {
            return new Date();
        },
        reversedMessage: function() {
            console.log('computed执行了');
            count += 1;
            return (
                count +
                this.message
                    .split('')
                    .reverse()
                    .join('')
            );
        }
    },
    mounted() {},
    methods: {
        changeFirstName() {
            this.firstName = '蒙奇二代';
        },
        getMethodsDate: function() {
            console.log(new Date());
        },
        // 返回computed选项中设置的计算属性——computedDate
        getComputedDate: function() {
            console.log(this.computedDate);
        },
        reversedMessage2: function() {
            console.log('methods执行了');
            count += 1;
            return (
                count +
                this.message
                    .split('')
                    .reverse()
                    .join('')
            );
        }
    }
};
</script>

<style>
</style>