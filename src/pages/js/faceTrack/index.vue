
<template>
    <div>
        <div class="user-img">
            <img src="./images/user.jpg"
                alt="咨询师图片"
                class="user">
        </div>
        <div class="demo-container">
            <div id="photo">
                <img id="img"
                    src="./images/faces.png">
            </div>
        </div>
    </div>
</template>
<script>
import './tracking-min.js';
import './face-min.js';
export default {
    data() {
        return {};
    },
    mounted() {
        window.onload = function () {
            var tracker = new window.tracking.ObjectTracker('face');
            let useImg = document.getElementsByClassName('user')[0];
            window.tracking.track(useImg, tracker);
            tracker.on('track', function (event) {
                event.data.forEach(function (rect) {
                    console.log(rect);
                    rangePhoto(rect.x, rect.y, rect.width, rect.height);
                });
            });

            let rangePhoto = function (x, y, w, h) {
                var rect = document.createElement('div');
                rect.classList.add('rect');
                document.getElementsByClassName('user-img')[0].appendChild(rect);

                rect.style.width = w + 'px';
                rect.style.height = h + 'px';
                rect.style.left = x + 'px';
                rect.style.top = y + 'px';
            };





            // 示例
            // var img = document.getElementById('img');
            // window.tracking.track(img, tracker);
            // tracker.on('track', function (event) {
            //     event.data.forEach(function (rect) {
            //         plotRectangle(rect.x, rect.y, rect.width, rect.height);
            //     });
            // });

            // var friends = ['Thomas Middleditch', 'Martin Starr', 'Zach Woods'];

            // var plotRectangle = function (x, y, w, h) {
            //     var rect = document.createElement('div');
            //     var arrow = document.createElement('div');
            //     var input = document.createElement('input');

            //     input.value = friends.pop();

            //     rect.onclick = function name() {
            //         input.select();
            //     };

            //     arrow.classList.add('arrow');
            //     rect.classList.add('rect');

            //     rect.appendChild(input);
            //     rect.appendChild(arrow);
            //     document.getElementById('photo').appendChild(rect);

            //     rect.style.width = w + 'px';
            //     rect.style.height = h + 'px';
            //     rect.style.left = img.offsetLeft + x + 'px';
            //     rect.style.top = img.offsetTop + y + 'px';
            // };
        };
    }
};
</script>
<style lang="less">
.user-img {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    // overflow: hidden;
    img {
        // width: 100%;
        // height: 100%;
        // object-fit: none;
    }
    .rect {
        border-radius: 2px;
        border: 3px solid white;
        box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.3);
        position: absolute;
    }
}
.demo-container {
    margin-top: 500px;
    width: 100%;
    height: 530px;
    position: relative;
    background: #eee;
    overflow: hidden;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    #photo:hover .rect {
        opacity: 0.75;
        transition: opacity 0.75s ease-out;
    }
    .rect:hover * {
        opacity: 1;
    }
    .rect {
        border-radius: 2px;
        border: 3px solid white;
        box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
        left: -1000px;
        opacity: 0;
        position: absolute;
        top: -1000px;
    }
    .arrow {
        border-bottom: 10px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        left: 50%;
        margin-left: -5px;
        bottom: -12px;
        opacity: 0;
    }
    input {
        border: 0px;
        bottom: -42px;
        color: #a64ceb;
        font-size: 15px;
        height: 30px;
        left: 50%;
        margin-left: -90px;
        opacity: 0;
        outline: none;
        position: absolute;
        text-align: center;
        width: 180px;
        transition: opacity 0.35s ease-out;
    }
    #img {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -173px 0 0 -300px;
    }
}
</style>