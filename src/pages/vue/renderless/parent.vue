<template>
    <div>
        <h3>函数式组件</h3>
        <p>函数式组件，意味着该组件无状态（没有响应式数据视图），无实例，因为没有视图渲染，因而渲染开销很低。大部分情况下用来包裹组件，配合作用域插槽，可以达到高阶组件的效果，用来分离视图渲染和业务逻辑非常有效，是一个值得注意的特性。</p>
    </div>
</template>

<script>
import linksList from './linksList';
export default {
    components: {
        linksList
    }
};
</script>

<style>
</style>