<template>
    <div class="navMenu">
        <label v-for="(navMenu,index) in navMenus" :key="index">
            <el-menu-item
                v-if="!navMenu.children"
                :data="navMenu"
                :route="navMenu.path"
                :index="index+'_'+navMenu.path"
            >
                <template slot="title">
                    <span slot="title">{{navMenu.meta.title}}</span>
                </template>
            </el-menu-item>
            <el-submenu
                v-if="navMenu.children"
                :data="navMenu"
                :index="index+'_'+navMenu.path"
            >
                <template slot="title">
                    <i :class="navMenu.meta.icon"></i>
                    <span slot="title">{{navMenu.meta.title}}</span>
                </template>
                <NavMenu :navMenus="navMenu.children"></NavMenu>
            </el-submenu>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'NavMenu',
        props: ['navMenus'],
        data() {
            return {};
        }
    };
</script>

<style scoped>

</style>