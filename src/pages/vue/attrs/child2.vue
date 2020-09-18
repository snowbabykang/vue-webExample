<template>
    <div>
        <div>二级子组件</div>
        <div>boo：{{boo}}</div>
        <div>attrs：{{$attrs}}</div>
        <child-child2 v-bind="$attrs"
            :boo="boo">
            <template v-slot:pre-icon="val">
                <span>前置图标 {{val.value == 1 ? 'value' : '没有value'}}</span>
            </template>
        </child-child2>
    </div>
</template>

<script>
import childChild2 from './child3';
export default {
    props: ['boo'],
    // inheritAttrs: false,
    created() {
        console.log(this.$attrs);
    },
    components: {
        childChild2
    }
};
</script>

<style>
</style>