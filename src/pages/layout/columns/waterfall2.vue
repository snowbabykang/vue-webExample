<template>
    <div class="contentbox">
        <el-button type="primary" @click="onSubmit">添加数据</el-button>
        <div class="masonry">
            <div class="item" v-for="item in data" :key="item">
                <div class="item__content" :class="'item__content--'+radom()"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data : [],
        }
    },
    methods: {
        radom(){
            let arr = ['large', 'medium', 'small'];
            var index = Math.floor((Math.random()*arr.length));
            return arr[index];
        },
        onSubmit(){
            let len = this.data.length;
            for(var i = len; i <= len + 19; i++){
                this.data.push(i);
            }
        }
    },
    mounted(){
        for(var i = 0; i < 20; i++){
            this.data.push(i);
        }
    }
}
</script>
<style scoped>
.masonry {
    column-count: 1;
    column-gap: 0;
    counter-reset: item-counter;
}
@media screen and (min-width: 400px) {
    .masonry {
        column-count: 2;
    }
}
@media screen and (min-width: 600px) {
    .masonry {
        column-count: 3;
    }
}
@media screen and (min-width: 800px) {
    .masonry {
        column-count: 4;
    }
}
@media screen and (min-width: 1100px) {
    .masonry {
        column-count: 5;
    }
}

.item {
    box-sizing: border-box;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    padding: 10px;
    counter-increment: item-counter;
}
.item__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 220px;
    font-size: 40px;
    color: #360007;
    background: currentColor;
    box-sizing: border-box;
    color: #720026;
}
.item__content:hover {
    background: #9b0034;
}
.item__content:before {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
    background-color: #222;
    content: counter(item-counter);
}
.item__content:after {
    color: #1c0004;
    content: 'ಠ‿ಠ';
}
.item__content--small {
    color: #CE4257;
    height: 100px;
}
.item__content--small:hover {
    background: #d66274;
}
.item__content--small:after {
    content: '♥◡♥';
}
.item__content--medium {
    color: #FFC093;
    height: 175px;
}
.item__content--medium:hover {
    background: #ffd8bc;
}
.item__content--medium:after {
    content: '◔ᴗ◔';
}
.item__content--large {
    color: #FF7F51;
    height: 280px;
}
.item__content--large:hover {
    background: #ff9d7a;
}
.item__content--large:after {
    content: 'ಠ_๏';
}
</style>
