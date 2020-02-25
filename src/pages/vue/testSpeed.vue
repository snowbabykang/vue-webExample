<template>
    <div>
        <h3>测试网速
        </h3>
        <h4>Ajax多次测速：{{moreAjaxSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{moreAjaxSpeed | transferMbps}}M
            <el-button @click="getMoreAjaxSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>次数越多，数据越准确。发出多次请求，来减少http请求建立连接等待响应的影响</div>
        <h4>图片测速：{{imgLoadSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{imgLoadSpeed | transferMbps}}M
            <el-button @click="getImgLoadSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>借助img.onload测算网速。好处：没有跨域问题。坏处：要自己测文件大小并提供参数fileSize,且文件必须为图片，文件大小不能灵活控制</div>
        <h4>图片XMLHttpRequest测速：{{imgSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{imgSpeed | transferMbps}}M
            <el-button @click="getImgSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>img加载测速：借助img对象加载测算网速。优点：没有跨域带来的问题。缺点：(1)文件必须为图片</div>
        <h4>Ajax单次测速：{{ajaxSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{ajaxSpeed | transferMbps}}M
            <el-button @click="getAjaxSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>Ajax测速： 通过Ajax测算网速。 优点： （1）测试的文件不一定要是图片（2）能多次求取平均值，数据量能灵活控制。缺点：跨域问题</div>
        <h4>downlink测速：{{dnLinkSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{dnLinkSpeed | transferMbps}}M
            <el-button @click="getDnLinkSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>downlink测速: 通过navigator.connection.downlink读取网速。优点：不需要任何参数。缺点：1.兼容性很有问题，2.带宽查询不是实时的,具有分钟级别的时间间隔</div>
        <h4>平均测速：{{allSpeed}}KB/S&nbsp;&nbsp;&nbsp;&nbsp;预估带宽{{allSpeed | transferMbps}}M
            <el-button @click="getAllSpeed()" type="primary" size="mini">测速</el-button>
        </h4>
        <div>综合实现：多次AJAX测速并求平均值。缺点：多次测速要去除缓存问题</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img: 'http://alyun3s.acc5.com/ping.jpg',
                imgOnline: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582461376033&di=fb22b43f8f3164b184e3540c071703c4&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
                imgLoad:
                    'http://testm.comjia.com/get_img.php?size=origin&src=/Upload/header/20190711172152381.jpeg',
                // img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
                imgLoadSpeed: '',
                imgSpeed: '',
                ajaxSpeed: '',
                moreAjaxSpeed: '',
                dnLinkSpeed: '',
                allSpeed: '',
                time: ''
            };
        },
        methods: {
            // fileSize  KB大小，计算出结果也是KB/s
            getSpeedWithImg: function(imgUrl, fileSize) {
                return new Promise((resolve, reject) => {
                    let start = null;
                    let end = null;
                    let img = document.createElement('img');
                    start = new Date().getTime();
                    img.onload = e => {
                        end = new Date().getTime();
                        this.time = end - start;
                        const speed = (fileSize * 1000) / (end - start);
                        resolve(Math.floor(speed));
                    };
                    img.src = imgUrl;
                }).catch(err => {
                    throw err;
                });
            },
            getSpeedByImg: function(fn) {
                var startTime, endTime, fileSize;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 2) {
                        startTime = Date.now();
                    }
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        endTime = Date.now();
                        fileSize = xhr.responseText.length;
                        var speed =
                            fileSize / ((endTime - startTime) / 1000) / 1024;
                        fn && fn(Math.floor(speed));
                    }
                };
                let img = this.img + '?id=' + Math.random();
                xhr.open('GET', img, true);
                xhr.send();
            },
            // 通过Ajax测算网速
            // 好处： 不用提供文件大小参数，测试的文件不一定要是图片,且数据量能灵活控制
            // 坏处：跨域
            getSpeedWithAjax: function(url) {
                return new Promise((resolve, reject) => {
                    let start = null;
                    let end = null;
                    start = new Date().getTime();
                    const xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            end = new Date().getTime();
                            const size =
                                xhr.getResponseHeader('Content-Length') / 1024;
                            const speed = (size * 1000) / (end - start);
                            resolve(Math.floor(speed));
                        }
                    };
                    var nowTime = new Date().getTime(); //获取当前时间作为随机数
                    url = url + '?time=' + nowTime;
                    xhr.open('GET', url);
                    xhr.send();
                }).catch(err => {
                    throw err;
                });
            },
            // ajax多次测速
            getSpeedByAjax: function(fn, time) {
                time = time || 1;
                var startTime, endTime, fileSize;
                var count = time;
                var _this = this;
                function measureBWSimple() {
                    var xhr = new XMLHttpRequest();
                    
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            if (!fileSize) {
                                fileSize = xhr.responseText.length;
                            }
                            console.log(fileSize);
                            count--;
                            if (count <= 0) {
                                endTime = Date.now();
                                // 因为多次建立连接，时长增加了，所以下面要乘以请求次数，再除以时间差
                                var speed =
                                    (fileSize * time) /
                                    ((endTime - startTime) / 1000) /
                                    1024;
                                fn && fn(Math.floor(speed));
                            }
                        }
                    };
                    xhr.open('GET', _this.img + '?cach=' + Math.random(), true);
                    // xhr.open('GET', _this.imgOnline + '&cach=' + Math.random(), true);
                    xhr.send();
                }
                startTime = Date.now();
                for (var x = time; x > 0; x--) {
                    measureBWSimple();
                }
            },

            // 通过navigator.connection.downlink读取网速
            // 优点：1.这是一个同步方法而不是异步方法 2.不需要任何参数
            // 缺点：1.兼容性很有问题，2.带宽查询不是实时的,具有分钟级别的时间间隔
            // downlink是下行速度 ，返回单位Mb/s
            getSpeedWithDnlink: function() {
                // downlink测算网速
                const connection = window.navigator.connection;
                if (connection && connection.downlink) {
                    return (connection.downlink * 1024) / 8;
                }
            },

            // 先尝试采用downlink测速，否则多次AJAX测速并求平均值
            getNetSpeed: function(url, times) {
                // downlink测算网速
                // const connection = window.navigator.connection;
                // if (connection && connection.downlink) {
                //     return (connection.downlink * 1024) / 8;
                // }
                // 多次测速求平均值

                const arr = [];
                for (let i = 0; i < times; i++) {
                    arr.push(this.getSpeedWithAjax(url));
                }
                return Promise.all(arr).then(speeds => {
                    // debugger;
                    let sum = 0;
                    speeds.forEach(speed => {
                        sum += speed;
                    });
                    return Math.floor(sum / times);
                });
            },
            getMoreAjaxSpeed: function(){
                this.getSpeedByAjax(speed => {
                    this.moreAjaxSpeed = speed;
                }, 10);
            },
            getImgLoadSpeed: function(){
                this.getSpeedWithImg(this.imgLoad, 909).then(res => {
                    this.imgLoadSpeed = res;
                });
            },
            getImgSpeed: function(){
                this.getSpeedByImg(speed => {
                    this.imgSpeed = speed;
                });
            },
            getDnLinkSpeed: function(){
                this.dnLinkSpeed = this.getSpeedWithDnlink();
            },
            getAjaxSpeed: function(){
                this.getSpeedWithAjax(this.img).then(res => {
                    this.ajaxSpeed = res;
                });
            },
            getAllSpeed() {
                this.getNetSpeed(this.img, 20).then(res => {
                    this.allSpeed = res;
                });
            }
        },
        filters: {
            // 带宽转到网速会有12%的消耗
            transferMbps(val) {
                if (val) {
                    return Math.floor(((val * 1.12) / 1024) * 8);
                } else {
                    return val;
                }
            }
        }
    };
</script>

<style>
</style>