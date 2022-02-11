<!--
 * @author: kangxue
 * @Date: 2022-01-07 18:16:21
 * @LastEditors: kangxue
 * @LastEditTime: 2022-01-07 18:21:08
 * @description: file content
-->
<template>
    <div class='container'>
        <div class="colored"></div>
        <div class="grayed"></div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
        let that = this;
        setInterval(that.setRandomValue, [1000]);
    },
    methods: {
        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        },
        setRandomValue() {
            const grayed = document.querySelector('.grayed');
            const randomAngel = this.getRandomIntInclusive(0, 180);
            grayed.style.transform = `rotateZ(${randomAngel}deg)`;
        }
    }
};
</script>
<style lang="less" scoped>

.container {
    position: relative;
}

.container,
.grayed {
    width: 396px;
    height: 198px;
    border-top-left-radius: 198px;
    border-top-right-radius: 198px;
    overflow: hidden;
}

.container {
    height: calc(198px + 4px);
}

.container::before,
.grayed::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    top: 40px;
    bottom: 0;
    left: 40px;
    right: 40px;
    border-top-left-radius: calc(396px / 2);
    border-top-right-radius: calc(396px / 2);
    background-color: #fff;
}

.colored {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 198px;
    background: conic-gradient(from -90deg at 50% 100%, #4cc62d 0deg, #faba2a 90deg, #f24c4f 180deg, rgba(230, 0, 0, 0) 360deg);
}

.grayed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 198px;
    z-index: 3;
    background-color: #494949;
    transition: all 0.5s;
    transform-origin: 50% 100%;
    transform: rotateZ(150deg);
}

.grayed::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 4;
    width: 198px;
    height: 4px;
    background: linear-gradient(to right, #eee, #000);
    bottom: 0;
    left: 0;
}
</style>