<template>
    <div class="wrapper">
        <v-head></v-head>
        <Sidebar :menuList="menuList"/>
        <div class="content-box" :class="{'content-collapse':collapse}">
              <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue'
import Sidebar from './Sidebar.vue'
export default {
  data () {
    return {
      tagsList: [],
      collapse: false,
      menuList: [
        {
          'path': '/baseForm', // 菜单项所对应的路由路径
          'title': '基本表单', // 菜单项名称
          'children': [] // 是否有子菜单，若没有，则为[]
        },
        {
          'path': '/baseTable', // 菜单项所对应的路由路径
          'title': '基本table', // 菜单项名称
          'children': [] // 是否有子菜单，若没有，则为[]
        },
        {
          'path': '/func2',
          'title': '功能2',
          'children': [
            {
              'path': '/func21',
              'title': '功能2-1',
              'children': []
            },
            {
              'path': '/func22',
              'title': '功能2-2',
              'children': []
            }
          ]
        }
      ]
    }
  },
  components: {
    vHead,
    Sidebar
  }
}
</script>
