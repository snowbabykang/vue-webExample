<template>
    <div>
        <h3>switch case后面是否加{}</h3>
        <el-button @click="test(1)">test(1)</el-button>
        <el-button @click="test(2)">test(2)</el-button>
        <el-button @click="test(3)">test(3)</el-button>
    </div>
</template>

<script>
export default {
    mounted() {
        this.test();
    },
    methods: {
        test(a) {
            switch(a) {
                case 1: 
                    let b = 4;
                    var c = 6;
                    console.log(a);
                break;
                case 2: 
                    {
                        let b = 5;
                        console.log(a);
                        console.log(b);
                    }
                break;
                case 3: 
                    console.log(a);
                    console.log(c);
                break;
            }
        }
    }
}
</script>

<style>

</style>