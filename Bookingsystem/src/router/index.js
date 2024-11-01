import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Medlem from '../views/Medlem.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/medlem',
      name: 'medlem',
      component: Medlem
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})

export default router
