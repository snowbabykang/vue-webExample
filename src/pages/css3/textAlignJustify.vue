<template>
    <div>
        <div class="intro-title">使用text-align:justify，让内容两端对齐，兼容IE及主流浏览器的方法</div>
        <h4>直接使用&emsp 或者& nbsp;来对齐</h4>
        <ul>
            <li>面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积</li>
            <li>总&nbsp;价&nbsp;预&nbsp;算</li>
            <li>带看咨询师</li>
        </ul>
        <h4>使用text-align:justify来对齐</h4>
        <ul class="align1">
            <li>面积</li>
            <li>总价预算</li>
            <li>带看咨询师</li>
        </ul>
        <h4>使用text-align:justify来对齐 —— 在内容中添加一个用于占位的标签，让内容处于第一行</h4>
        <ul class="align2">
            <li>面积<div class="aw"></div>
            </li>
            <li>总价预算<div class="aw"></div>
            </li>
            <li>带看咨询师<div class="aw"></div>
            </li>
        </ul>
        <h4>使用text-align:justify来对齐 —— 添加after伪元素</h4>
        <ul class="align3">
            <li>面积</li>
            <li>总价预算</li>
            <li>带看咨询师</li>
        </ul>
        <h4>使用text-align:justify来对齐 —— 使用 text-align-last:justify 属性 </h4>
        <ul class="align4">
            <li>面积</li>
            <li>总价预算</li>
            <li>带看咨询师</li>
        </ul>
        <h4>使用text-align:justify来对齐 —— 使用 text-align-last:justify 属性 + after伪类兼容 </h4>
        <ul class="align5">
            <li>面积</li>
            <li>总价预算</li>
            <li>带看咨询师</li>
        </ul>

    </div>
</template>

<script>
    export default {};
</script>

<style lang="less" scoped>
ul {
    list-style: none;
    margin: 0;
    background: #f1f2f3;
}
ul.align1 {
    li {
        width: 120px;
        text-align: justify;
    }
}
ul.align2 {
    li {
        width: 120px;
        text-align: justify;
        height: 32px;
        line-height: 32px;
        .aw {
            display: inline-block;
            width: 100%;
        }
    }
}
ul.align3 {
    li {
        width: 5em;
        text-align: justify;
        height: 32px;
        line-height: 32px;
        &:after {
            content: '';
            display: inline-block;
            width: 100%;
        }
    }
}
ul.align4 {
    li {
        width: 120px;
        text-align: justify;
        text-align-last:justify
    }
}
ul.align5 {
    li {
        width: 5em;
        text-align: justify;
        text-align-last:justify;
        height: 32px;
        line-height: 32px;
        &:after {
            content: '';
            display: inline-block;
            width: 100%;
        }
    }
}
</style>