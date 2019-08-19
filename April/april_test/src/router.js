import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/views/Preview'
import Review from '@/views/Review'
import Skill_Preactice from '@/views/Skill_Preactice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/review',
      name: 'review',
      component: Review
    },
    {
      path: '/skill_Preactice',
      name: 'Skill_Preactice',
      component: Skill_Preactice
    },
  ]
})
