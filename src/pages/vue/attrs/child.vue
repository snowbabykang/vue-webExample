<template>
    <div>
        <div>一级子组件</div>
        <div>foo：{{foo}}</div>
        <div>attrs：{{$attrs}}</div>
        <child-child v-bind="$attrs"></child-child>
    </div>
</template>

<script>
import childChild from './child2';
export default {
    props: ['foo'],
    inheritAttrs: false,
    created() {
        console.log(this.$attrs);
    },
    components: {
        childChild
    }
};
</script>