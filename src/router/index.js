import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import ErrorPage from '@/components/page/404.vue'
import BaseForm from '@/components/page/BaseForm'
import BaseTable from '@/components/page/BaseTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: { title: '自述文件' },
      children: [
        {
          path: '/404',
          component: ErrorPage,
          meta: { title: '404' }
        },
        {
          path: '/baseForm',
          component: BaseForm,
          meta: { title: '基本表单' }
        },
        {
          path: '/baseTable',
          component: BaseTable,
          meta: { title: '基本table' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }]
})
