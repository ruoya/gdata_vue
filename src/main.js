import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
axios.defaults.baseURL = '/api' // 开发本地代理

require('es6-promise').polyfill()
Vue.use(ElementUI, {
  size: 'small'
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // eslint-disable-next-line standard/object-curly-even-spacing
  components: { App},
  template: '<App/>'
})
