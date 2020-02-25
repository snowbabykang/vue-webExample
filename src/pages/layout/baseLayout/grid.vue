<template>
    <div class="pane">
        <div class="gridbox">
            <div class="grid-slider leftbg">
                <div>高度没有定义,grid等高，占1fr</div>
                <div>侧边栏宽240px，间隔20px</div>
            </div>
            <div class="grid-header">header高80px，间隔20px</div>
            <div class="grid-content rightbg">
                <ul>
                    <li>设置grid-template-columns:auto 1fr;左侧自适应，右侧占剩余部分</li>
                    <li>也可以使用grid-template直接整体页面二维布局</li>
                    <li>grid可设置grid-gap作为单元格外边距</li>
                    <li>Grid布局则适用于更大规模的布局（二维布局），而Flexbox布局最适合应用程序的组件和小规模布局（一维布局）</li>
                    <li>在Grid布局中，float，display:inline-block，display:table-cell，vertical-align以及column-*这些属性和声明对grid子项是没有任何作用的</li>
                    <li>
                        <router-link
                            class="routerlink"
                            to="/grid"
                        >grid布局测试</router-link>
                    </li>
                    <li>grid等高</li>
                    <li>
                        <pre>
                            .gridbox{
                                display:grid;
                                grid-template: 
                                "header header header" 80px 
                                "slider main main" 1fr 
                                "slider footer footer" 40px
                                /240px 1fr 1fr;
                            }
                        </pre>
                    </li>
                </ul>
            </div>
            <div class="grid-footer">footer高40px，间隔20px</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.pane {
    height: 800px;
}
.gridbox {
    display: grid;
    height: 100%;
    grid-gap: 20px;
    grid-template:
        'header header header' 80px
        'slider main main' 1fr
        'slider footer footer' 40px
        /240px 1fr 1fr;
}
.grid-header {
    grid-area: header;
    background: #fffad5;
}
.grid-slider {
    grid-area: slider;
}
.grid-content {
    grid-area: main;
}
.grid-footer {
    grid-area: footer;
    background: #333;
    color: #fff;
}
</style>