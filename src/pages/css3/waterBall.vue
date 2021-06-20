<!--
 * @author: kangxue
 * @Date: 2021-05-08 14:59:03
 * @LastEditors: kangxue
 * @LastEditTime: 2021-05-08 15:31:34
 * @description: 水球效果
-->
<template>
    <div>
        <div class="wave-box all-wave">
            <div class="text">100</div>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
        </div>
        <div class="wave-box">
            <div class="text">50</div>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
        </div>
        <div class="wave-box red-wave">
            <div class="text">80</div>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
        </div>
        <div class="center">
            <div class="text">100</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
.wave-box {
    position: relative;
    border: 1px solid silver;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    line-height: 50px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    animation: water-wave linear infinite;
    display: inline-block;
    margin: 0 20px;
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #333;
        z-index: 100;
        font-weight: bold;
        font-size: 38px;
    }
}
.wave-box .wave {
    position: absolute;
    top: 40%;
    background-image: radial-gradient(green, #3dcd94, white);
    // background-image: radial-gradient(green, #3dcd94, yellow);
    opacity: 0.7;
    width: 200%;
    height: 200%;
    border-radius: 40%;
}
.wave1 {
    left: -25%;
    animation: inherit;
    animation-duration: 5s;
}
.wave2 {
    left: -35%;
    animation: inherit;
    animation-duration: 8s;
}
.wave3 {
    left: -45%;
    animation: inherit;
    animation-duration: 10s;
}
.all-wave .wave {
    top: 0;
}
.red-wave {
    .wave {
        background-image: radial-gradient(red, red, white);
        top: 20%;
    }
}
@keyframes water-wave {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.center {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: #0094ff;
    background: radial-gradient(circle at 70% 30%, #0aafe6, #222222);
    border-radius: 50%;
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #333;
        z-index: 100;
        font-weight: bold;
        font-size: 38px;
    }
}
</style>
