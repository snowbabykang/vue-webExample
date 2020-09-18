<template>
    <div>
        <h2>vue 动态组件实现tab切换加载不同的小模块</h2>
        <div>
            <a href="javascript:void(0)"
                @click="tabChange('child1')">第一项</a>
            <a href="javascript:void(0)"
                @click="tabChange('child2')">第二项</a>
            <a href="javascript:void(0)"
                @click="tabChange('child3')">第三项</a>
        </div>
        <!-- 动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。 -->
        <keep-alive>
        <div :is="currentView" :content="content"></div>
        </keep-alive>
    </div>
</template>

<script>
// 导入子组件
import child1 from './child1';
import child2 from './child2';
import child3 from './child3';

export default {
    data() {
        return {
            currentView: 'child1', // 默认选中第一项
            content: '传输内容'
        };
    },
    methods: {
        tabChange(tabItem) {
            this.currentView = tabItem;
        }
    },
    components: {
        child1,
        child2,
        child3
    }
};
</script>