import Vue from 'vue'
import VueRouter from 'vue-router'
import Meals from '../views/Meals.vue'
import ThisWeeksMenu from '../views/ThisWeeksMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ThisWeeksMenu',
    component: ThisWeeksMenu
  },
  {
    path: '/meals',
    name: 'meals',
    component: Meals
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
