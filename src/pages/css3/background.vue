<template>
    <div>
        <ul>
            <li>border-box背景图片的摆放以border区域为参考</li>
            <li>padding-box背景图片的摆放以padding区域为参考</li>
            <li>content-box背景图片的摆放以content区域为参考</li>
        </ul>
        <el-form>
            <el-alert
                type="success"
                title="background-origin默认值是padding-box"
            ></el-alert>
            <el-form-item label="background-origin：">
                <el-radio-group v-model="backgroundOrigin">
                    <el-radio
                        :label="item"
                        v-for="item in backgroundOriginArr"
                        :key="item"
                    >{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-alert
                type="success"
                title="backgroun-clip默认值是padding-box"
            ></el-alert>
            <el-form-item label="backgroun-clip：">
                <el-radio-group v-model="backgroundOrigin">
                    <el-radio
                        :label="item"
                        v-for="item in backgroundOriginArr"
                        :key="item"
                    >{{item}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <div>
                background-clip 与 background-origin是css3中引入的两个跟元素背景相关的属性，它们有相同的可选值，即border、padding、content三种，而且这两个属性表示的都是元素背景与元素边框、补白(padding)和内容区域之间的某种关系。
            </div>
        　　 <div>
                虽然两者看上去实现的效果差不多，但是他们两个的原理是不同的。background-origin定义的是背景位置（background-position）的起始点；而background-clip是对背景（图片和背景色）的切割。
            </div>
        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                backgroundOrigin: '',
                backgroundOriginArr: ['border-box', 'padding-box', 'content-box'],

                imgList: ['across.jpg', 'square.jpg', 'vertical.jpg', 'small.jpg'],
                objectPosition: '50% 50%',
                objectPositionArr: [
                    '50% 50%',
                    '100px 50px',
                    'right top',
                    'left bottom'
                ]
            };
        }
    };
</script>

<style scoped>
</style>