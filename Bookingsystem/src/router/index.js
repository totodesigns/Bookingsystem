import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import BookStart from '../views/bookingflow/BookStart.vue'
import Member from '../views/bookingflow/Member.vue'
import Trainer from '../views/bookingflow/Trainer.vue'
import ChooseTrainer from '../views/bookingflow/ChooseTrainer.vue'
import ChooseOption from '../views/bookingflow/ChooseOption.vue'
import PostSession from '../views/bookingflow/PostSession.vue'
import Sessions from '../views/bookingflow/Sessions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/bookstart',
      name: 'bookstart',
      component: BookStart
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
