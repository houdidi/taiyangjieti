// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ----Element-UI----
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// ----axios----
import axios from 'axios'
// ----vuex----
import store from './store/store'
console.log(store)

Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})