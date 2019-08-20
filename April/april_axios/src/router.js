import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/views/Preview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Preview',
      name: 'Preview',
      component: Preview
    },
  ]
})
