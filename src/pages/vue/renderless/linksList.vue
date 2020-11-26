<template>
    <div>
        <li v-for="item in links"
            :key="item.title">
            <slot name="link"
                :link="item"
                :bookmark="bookmark"></slot>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { href: 'http://baidu.com', title: 'first Link', bookmarked: true },
                { href: 'http://map.baidu.com', title: 'second Link', bookmarked: false }
            ]
        };
    },
    methods: {
        bookmark(link) {
            link.bookmarked = true;
        }
    }
};
</script>

<style>
</style>