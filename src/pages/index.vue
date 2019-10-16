<template>
    <div class="contentbox">
        <ul>
            <li v-for="(item,index) in activeMenu">
                <router-link :to="item.path" class="routerlink">{{item.meta.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            
        }
    },
    computed: {
        activeMenu: function () {
            let routes = this.$router.options.routes;
            return routes.filter(function (menu) {
                return menu.name !== 'index';
            })
        }
    }
}
</script>
<style scoped>
.routerlink{
    text-decoration: none;
    color: inherit;
}
.routerlink:hover{
    color: blue;
}
ul li {
    list-style: decimal;
    padding: 5px 0;
    font-weight: bold;
}
</style>
