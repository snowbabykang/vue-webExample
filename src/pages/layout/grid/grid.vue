<template>
    <div>
        <el-form>
            <el-form-item label="grid布局">
                <el-input v-model="grid"></el-input>
            </el-form-item>
        </el-form>
        <div class="gridbox" :style="{
            'grid': grid
        }">
            <div v-for="item in 8" :key="item">{{item}}</div>
        </div>
        <div>
            <h4>grid使用说明</h4>
            <ul>
                <!-- <li>none表示设置所有的子属性为初始值。相当于全部是自动布局auto</li> -->
                <li>grid: none</li>
                <!-- <li>和grid-template用法一致。例如这样grid: 100px 300px / 3fr 1fr;也可以写上区域</li> -->
                <li>grid: grid-template</li>
                <!-- <li>通过设置grid-template-rows属性（将grid-template-columns属性设置为none）显式设置行轨道，并指定如何通过grid-auto-columns（将设置grid-auto-rows为auto）自动重复列轨道，从而设置自动流</li> -->
                <li>grid: grid-template-rows / [ auto-flow && dense? ] grid-auto-columns? </li>
                <!-- <li>通过设置grid-template-columns属性（将grid-template-rows属性设置为none）显式设置列轨道，并指定如何通过grid-auto-rows（将设置grid-auto-columns为auto）自动重复行轨道，从而设置自动流程。</li> -->
                <li>grid: [ auto-flow && dense? ] grid-auto-rows? / grid-template-columns</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                grid: 'repeat(2, 60px) / auto-flow 80px'
            };
        },
        methods: {}
    };
</script>
<style scoped>
.gridbox {
    display: grid;
    background: #eee;
    padding: 10px;
}

.gridbox > div {
    width: 100%;
    height: 100%;
    outline: 1px dotted;
}
.gridbox > div:nth-child(3n) {
    background-color: #8ca0ff;
}
.gridbox > div:nth-child(3n+1) {
    background-color: #ff8cb8;
}
.gridbox > div:nth-child(3n+2) {
    background-color: #0ea59d;
}
</style>
