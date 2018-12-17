import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    name: 'login',
    component: login
  }]
})

router.beforeEach((to, from, next) => {
  let islogin = sessionStorage.getItem('accessToken')
  if (islogin) {
    next()
  } else {
    if (to.path !== '/' && to.path !== '/login') {
      next({path: '/'})
    } else {
      next()
    }
  }
})

export default router
