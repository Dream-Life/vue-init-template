// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'
import router from './router'
import 'iview/dist/styles/iview.css'
import '@/util/iview.js'
import '@/util/axios.js'
import '@/style/common.styl'
import '@/util/cookie.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
