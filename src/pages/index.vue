<template>
    <div class="contentbox">
        <ul>
            <li v-for="(item,index) in activeMenu"
                :key="index">
                {{item.meta.title}}
                <ul class="sub-menu">
                    <li v-for="(value,key) in item.children"
                        :key="'sub_'+key">
                        <router-link :to="value.path"
                            class="routerlink">{{value.meta.title}}
                            <span v-if="value.meta.content">——>{{value.meta.content}}</span>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {};
    },
    computed: {
        activeMenu: function() {
            let routes = this.$router.options.routes;
            return routes.filter(function(menu) {
                return menu.name !== '';
            });
        }
    },
    mounted() {
        console.log(this.$router);
    }
};
</script>
<style scoped>
.routerlink {
    text-decoration: none;
    color: inherit;
}
.routerlink:hover {
    color: blue;
}
ul li {
    list-style: decimal;
    padding: 5px 0;
    font-weight: bold;
}
.sub-menu li {
    font-weight: normal;
    cursor: pointer;
    text-decoration: underline;
}
</style>
