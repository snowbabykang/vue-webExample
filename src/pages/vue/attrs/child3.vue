<template>
    <div>
        <div>三级子组件</div>
        <div>boo：{{boo}}</div>
        <div>coo：{{coo}}</div>
        <div>attrs：{{$attrs}}</div>
        <slot name="pre-icon" :value="value"></slot>
    </div>
</template>

<script>
export default {
    props: ['coo','boo'],
    data() {
        return {
            value: 1
        };
    },
    inheritAttrs: false,
    created() {
        console.log(this.$attrs);
    }
};
</script>

<style>

</style>