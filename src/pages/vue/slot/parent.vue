<template>
    <div>
        <h3>简单的插槽使用</h3>
        <links-list>
            <div slot="link"
                slot-scope="{link, bookmark}"
                style="display: inline-block">
                <span v-show="link.bookmarked">标记</span>
                <a :href="link.href"
                    target="_blank">
                    {{link.title}}
                </a>
                <el-button type="text"
                    v-show="!link.bookmarked"
                    @click="bookmark(link)">BookMark</el-button>
            </div>
        </links-list>
        <h4>slot绑定功能</h4>
        <links-list>
            <div slot="linkBind"
                slot-scope="{link, bookmarkButtonAttrs, bookmarkButtonEvents}"
                style="display: inline-block">
                <span v-show="link.bookmarked">标记</span>
                <a :href="link.href"
                    target="_blank">
                    {{link.title}}
                </a>
                <el-button type="text"
                    v-bind="bookmarkButtonAttrs"
                    v-on="bookmarkButtonEvents">BookMark</el-button>
            </div>
        </links-list>
        <h3>2.6.0版本插槽使用</h3>
        <p>在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。</p>
        <p>v-slot可以直接写在组件上，或者多个插槽写在template上，不能写在譬如div上</p>
        <p>默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确，只要出现多个插槽，请始终为所有的插槽使用完整的基于 template 的语法</p>
        <h4>v-slot:link="slotProps" 总的slot传到父级的值</h4>
        <links-list>
            <template v-slot:link="slotProps"
                style="display: inline-block">
                <span v-show="slotProps.link.bookmarked">标记</span>
                <a :href="slotProps.link.href"
                    target="_blank">
                    {{slotProps.link.title}}
                </a>
                <el-button type="text"
                    v-show="!slotProps.link.bookmarked"
                    @click="slotProps.bookmark(slotProps.link)">BookMark</el-button>
            </template>
        </links-list>
        <h4>v-slot:link="{link, bookmark: bookMark}" 解构了子组件传过来的值，且bookmark重命名为bookMark</h4>
        <links-list v-slot:link="{link, bookmark: bookMark}">
            <span v-show="link.bookmarked">标记</span>
            <a :href="link.href"
                target="_blank">
                {{link.title}}
            </a>
            <el-button type="text"
                v-show="!link.bookmarked"
                @click="bookMark(link)">BookMark</el-button>
        </links-list>
        <h4>slot绑定功能</h4>
        <links-list>
            <template v-slot:linkBind="{link, bookmarkButtonAttrs, bookmarkButtonEvents}">
                <span v-show="link.bookmarked">标记</span>
                <a :href="link.href"
                    target="_blank">
                    {{link.title}}
                </a>
                <el-button type="text"
                    v-bind="bookmarkButtonAttrs"
                    v-on="bookmarkButtonEvents">BookMark</el-button>
            </template>
        </links-list>
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