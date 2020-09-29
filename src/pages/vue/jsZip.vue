<template>
    <div>
        {{name}}
        <h3>请求链接获取文件内容需要能够跨域</h3>
        <ul>
            <li v-for="(item, index) in fileList"
                :key="index">{{item.name}}</li>
        </ul>
        <el-button type="primary"
            @click="downLoadAll(fileList)">打包并下载zip文件</el-button>
        <ul>
            <li v-for="(item, index) in imgList"
                :key="index">{{item}}</li>
        </ul>
        <el-button type="primary"
            @click="downLoadImgs(imgList)">打包并下载图片zip文件</el-button>
    </div>
</template>

<script>
import FileSaver from 'file-saver';
import JSZip from 'jszip';
import axios from 'axios';
const fileList = [
    {
        name: '发票.png',
        url: ''
    },
    // {
    //     name: '111.doc',
    //     url: ''
    // },
    {
        name: '222.pdf',
        url: ''
    }
];
export default {
    data() {
        return {
            fileList: fileList,
            imgList: ['', ''],
            name: localStorage.getItem('name')
        };
    },
    create() {
        window.addEventListener('setItem', (e) => {
            console.log('监听变化',e);
            this.name = localStorage.getItem('name');
        });
    },
    methods: {
        getFile(url) {
            let that = this;
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    url,
                    responseType: 'arraybuffer'
                    // onDownloadProgress: function(progressEvent) {}
                })
                    .then(data => {
                        console.log(data);
                        resolve(data.data);
                    })
                    .catch(error => {
                        reject(error.toString());
                    });
            });
        },
        downLoadAll(data) {
            console.log(data);
            const zip = new JSZip();
            const cache = {};
            const promises = [];
            data.forEach(item => {
                const promise = this.getFile(item.url).then(data => {
                    // 下载文件, 并存成ArrayBuffer对象
                    // const arr_name = item.split('/');
                    // const file_name = arr_name[arr_name.length - 1]; // 获取文件名
                    const file_name = item.name;
                    zip.file(file_name, data, { binary: true }); // 逐个添加文件
                    cache[file_name] = data;
                });
                promises.push(promise);
            });
            Promise.all(promises).then(() => {
                zip.generateAsync({ type: 'blob' }).then(content => {
                    console.log(content);
                    // 生成二进制流
                    FileSaver.saveAs(content, '打包下载.zip'); // 利用file-saver保存文件
                });
            });
        },
        async getUrlBase64(url, ext) {
            return new Promise((resolve, reject) => {
                var canvas = document.createElement('canvas'); // 创建canvas DOM元素
                var ctx = canvas.getContext('2d');
                var img = new Image();
                console.log(111);
                img.crossOrigin = 'Anonymous'; // 处理跨域
                img.src = url;
                img.onload = () => {
                    console.log(22);
                    canvas.width = img.width; // 指定画板的高度,自定义
                    canvas.height = img.height; // 指定画板的宽度，自定义
                    ctx.drawImage(img, 0, 0); // 参数可自定义
                    var dataURL = canvas.toDataURL('image/' + ext);
                    resolve(dataURL); // 回调函数获取Base64编码
                    canvas = null;
                };
            });
        },
        async downLoadImgs(imgList) {
            const proList = [];
            const zip = new JSZip();
            const cache = {};
            await imgList.forEach(item => {
                // 等待所有图片转换完成
                const pro = this.getUrlBase64(item, '.jpg').then(base64 => {
                    const fileName = item.replace(/(.*\/)*([^.]+)/i, '$2');
                    zip.file(fileName, base64.substring(base64.indexOf(',') + 1), {
                        base64: true
                    });
                    cache[fileName] = base64;
                });
                proList.push(pro);
            });
            Promise.all(proList).then(res => {
                zip.generateAsync({
                    type: 'blob'
                }).then(content => {
                    // 生成二进制流
                    console.log(content);
                    // saveAs(content, 'images.zip'); // 利用file-saver保存文件
                });
            });
        }
    }
};
</script>

<style>
</style>