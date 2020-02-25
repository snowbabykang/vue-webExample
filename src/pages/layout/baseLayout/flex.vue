<template>
    <div>
        <div class="flexbox">
            <div class="leftbg">
                <div>左侧宽度根据内容决定</div>
                <div>高度没有定义,flex等高</div>
            </div>
            <div class="flex-item rightbg">
                <ul>
                    <li>右侧设置flex:1占剩余全部宽度</li>
                    <li>flex可设置外边距</li>
                    <li>在Flex布局中，flex子元素的设置float，clear以及vertical-align属性都是没有用的。</li>
                    <li>Flexbox布局最适合应用程序的组件和小规模布局（一维布局），而Grid布局则适用于更大规模的布局（二维布局），</li>
                    <li>Flex老语法不用在管了，舒爽弃之，然后私有前缀也不用再加了</li>
                    <li>flex等高</li>
                    <li>内容想垂直居中，使子项再套一层flex，display:flex;align-items:center;</li>
                    <li>
                        <router-link
                            class="routerlink"
                            to="/flex"
                        >flex布局测试</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flexbox {
    display: flex;
}
.flex-item {
    flex: 1;
    margin-left: 20px;
}
</style>