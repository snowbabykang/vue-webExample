<template>
    <div>
        <ul>
            <li>fill: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。</li>
            <li>contain: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。</li>
            <li>cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容部分区域不可见。</li>
            <li>none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。</li>
            <li>scale-down: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。</li>
        </ul>
        <el-form>
            <el-form-item label="object-fit：">
                <el-radio-group v-model="objectFit">
                    <el-radio :label="item" v-for="item in objectFitArr" :key="item">object-fit: {{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-alert type="success" title="object-position默认值是50% 50%，也就是居中效果"></el-alert>
            <el-form-item label="object-position：">
                <el-radio-group v-model="objectPosition">
                    <el-radio :label="item" v-for="item in objectPositionArr" :key="item">object-position：{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <ul class="imglist">
            <li v-for="item in imgList" :key="item">
                <img :style="{'object-fit': objectFit, 'object-position': objectPosition}" :src="'static/images/' + item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            objectFit: 'scale-down',
            objectFitArr: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            imgList: ['across.jpg', 'square.jpg', 'vertical.jpg', 'small.jpg'],
            objectPosition: '50% 50%',
            objectPositionArr: ['50% 50%', '100px 50px', 'right top', 'left bottom'],
        }
    }
}
</script>

<style scoped>
.imglist{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
}
.imglist li {
    width: 250px;
    height: 250px;
    border: 1px solid red;
    margin-right: 20px;
}
.imglist li img {
    width: 100%;
    height: 100%;
}
</style>