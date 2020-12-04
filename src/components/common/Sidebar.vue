<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="sidebar-el-menu"
        :collapse="collapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        unique-opened
        router>
      <sidebar-item v-for="menu in menuList" :key="menu.path" :item="menu" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style >
  .sidebar-container {
    transition: width 0.28s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    bottom: 0;
    left: 0;
    top: 50px;
    z-index: 1001;
    overflow: hidden;
    display: block;
    //overflow-y: scroll;
    bottom: 0;
  }
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .el-scrollbar {
        height: 100%;
    }
    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }
      .el-scrollbar__view {
        height: 100%;
      }
    .el-scrollbar__bar.is-vertical{
      right: 0px;
    }
    .is-horizontal {
      display: none;
    }
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
    .is-active > .el-submenu__title{
        color: #f4f4f5!important;
    }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
</style>
