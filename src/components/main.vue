<template>
    <el-container class="container">
        <el-aside :width="isCollapse ? '64px' : '260px'" :class="isCollapse ? 'collapse' : ''">
            <el-menu
                :default-active="$route.path"
                class="mymenu"
                unique-opened
                router
                :collapse="isCollapse"
            >
                <NavMenu :navMenus="treeData"></NavMenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="header">
                <div @click="collapse" class="collapsebtn">
                    <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                </div> {{$route.meta.title}}
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavMenu from '../components/menu'
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    components: {
        NavMenu,
    },
    methods: {
        //折叠导航栏
        collapse: function () {
            this.isCollapse = !this.isCollapse;
        }
    },
    computed: {
        treeData: function () {
            let routes = this.$router.options.routes;
            return routes.filter(function (menu) {
                return menu.menu === true;
            })
        }
    },
    mounted() {
        
    }
};
</script>
<style scoped>
.container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.mymenu{
    height: 100%;
}
.header {
    background-color: #b3c0d1;
    color: #fff;
    line-height: 40px;
    height: 40px!important;
}
.aside {
    color: #333;
}
.collapsebtn {
    display: inline-block;
    width: 50px;
    text-align: center;
    margin-left: -17px;
}
.collapse {

}
.collapse >>> .el-menu-item span, .collapse >>> .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.collapse >>> .el-menu-item .el-submenu__icon-arrow, .collapse >>> .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none;
}
</style>