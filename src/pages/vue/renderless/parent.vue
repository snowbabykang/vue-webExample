<template>
    <div>
        <h3>函数式组件</h3>
        <p>函数式组件，意味着该组件无状态（没有响应式数据视图），无实例，因为没有视图渲染，因而渲染开销很低。大部分情况下用来包裹组件，配合作用域插槽，可以达到高阶组件的效果，用来分离视图渲染和业务逻辑非常有效，是一个值得注意的特性。</p>
        <div class='input-tags--container'>
            <h1>布局1</h1>
            <input-tags v-model="tags1">
                <div slot-scope="{tags,inputEvents,inputAttrs,removeTag}"
                    class="input-tags-wrap">
                    <el-tag
                        class="tag"
                        :key="index"
                        v-for="(tag,index) in tags"
                        closable
                        @close="removeTag(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input class="tag_input"
                        :value="inputAttrs"
                        v-on="inputEvents"
                        size="small"
                        placeholder="Add tag..."></el-input>
                </div>
            </input-tags>
            <h1>布局2</h1>
            <input-tags v-model="tags2">
                <div slot-scope="{tags,inputEvents,inputAttrs,removeTag,addTag}"
                    class="input-tags-wrap--two">
                    <div class="tag_input--wrap">
                        <el-input class="tag_input--two"
                            :value="inputAttrs"
                            v-on="inputEvents"
                            placeholder="Add tag..."></el-input>
                        <el-button type="primary"
                            @click="addTag">添加</el-button>
                    </div>
                    <div v-for="(tag,index) in tags"
                        :key="index"
                        class="tag--wrap">
                        <span>{{index+1}}： {{tag}}</span>
                        <el-button type="text"
                            @click="removeTag(tag)">删除</el-button>
                    </div>
                </div>
            </input-tags>
        </div>
    </div>
</template>

<script>
import inputTags from './inputTags.vue';

export default {
    data() {
        return {
            tags1: ['test1', 'test2'],
            tags2: ['test1', 'test2', 'test3']
        };
    },
    components: {
        'input-tags': inputTags
    }
};
</script>

<style lang='less'>
@import url(./index.less);
</style>
