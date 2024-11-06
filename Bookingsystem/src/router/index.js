import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Trainer from '../views/Trainer.vue'
import ChooseTrainer from '../views/ChooseTrainer.vue'
import ChooseOption from '../views/ChooseOption.vue'
import PostSession from '../views/PostSession.vue'
import Sessions from '../views/Sessions.vue'

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
      path: '/choosetrainer',
      name: 'choosetrainer',
      component: ChooseTrainer
    },
    {
      path: '/chooseoption',
      name: 'chooseoption',
      component: ChooseOption
    },
    {
      path: '/postsession',
      name: 'PostSession',
      component: PostSession,
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions,
    },

  ]
})

export default router
