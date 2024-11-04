import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Trainer from '../views/Trainer.vue'
import TrainerLoggedIn from '../components/LoggedIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/trainer',
      name: 'trainer',
      component: Trainer
    },
    {
      path: '/trainer/LoggedIn',
      name: 'trainerLoggedIn',
      component: TrainerLoggedIn,
    },

  ]
})

export default router
