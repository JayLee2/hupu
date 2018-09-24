import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import nbaIndex from './views/nbaIndex'
import me from './views/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
      {
          path: '/index',
          name: 'nbaIndex',
          component: nbaIndex
      },
      {
          path: '/me',
          name: 'me',
          component: me
      },

  ]
})
