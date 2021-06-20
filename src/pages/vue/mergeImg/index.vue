<!--
 * @author: kangxue
 * @Date: 2021-05-07 11:29:24
 * @LastEditors: kangxue
 * @LastEditTime: 2021-05-07 16:35:31
 * @description: 拖拽缩放图片并与背景图合成一张图
-->
<template>
    <div>
        <div class="back-box">
            <div class="range-box"></div>
            <vue-draggable-resizable class-name="my-drag"
                :w="300"
                :h="400"
                :x="30"
                :y="200"
                @dragging="onDrag"
                @resizing="onResize"
                :parent="true"
                lock-aspect-ratio>
                <img class="user-img"
                    src="./img/user1.png"
                    alt="">
            </vue-draggable-resizable>
        </div>
        <el-button type="primary"
            @click="creatImg">生成咨询师图</el-button>
    </div>
</template>

<script>
import html2canvas from 'html2canvas';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
export default {
    components: {
        VueDraggableResizable
    },
    data() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };
    },
    methods: {
        onResize: function (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        onDrag: function (x, y) {
            this.x = x;
            this.y = y;
        },
        // 生成咨询师图
        creatImg() {
            var affirm = document.querySelector('.back-box');
            var copyDom = affirm.cloneNode(true);
            copyDom.removeChild(copyDom.getElementsByClassName("range-box")[0]);
            copyDom.className += ' template-copy-dom';
            copyDom.style.position = 'fixed';
            copyDom.style.backgroundColor = 'white';
            copyDom.style.zIndex = '-3';
            document.body.appendChild(copyDom);
            window.pageYOffset = 0;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            html2canvas(
                document.querySelector('.template-copy-dom'),
                {
                    backgroundColor: null,
                    //不允许跨域图片污染画布
                    // allowTaint: false,
                    //允许加载跨域图片
                    // useCORS: true,
                    // width:375,
                    // height:667,
                    scale: 1.39
                }
            ).then((canvas) => {
                let dataURL = canvas.toDataURL('image/png');
                // console.log(dataURL);
                document.body.removeChild(copyDom);
                var saveLink = document.createElement('a');
                saveLink.href = dataURL;
                saveLink.download = 'downLoad.png';
                saveLink.click();
            });
        }
    }
};
</script>

<style lang="less" scoped>
.back-box {
    position: relative;
    background-image: url('./img/b2.jpeg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 640px;
    width: 360px;
}
.my-drag {
    text-align: center;
}
.user-img {
    max-width: 100%;
    max-height: 100%;
}
.range-box {
    position: absolute;
    top: 300px;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translateX(-50%);
    border: 1px solid red;
}
</style>
