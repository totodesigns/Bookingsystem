import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Medlemskaber from '../views/Medlemskaber.vue'
import PersonligTraening from '../views/PersonligTraening.vue'
import HoldTraening from '../views/HoldTraening.vue'
import StrongSenior from '../views/holdtraeninger/StrongSenior.vue'
import Styrkehold from '../views/holdtraeninger/Styrkehold.vue'
import Yoga from '../views/holdtraeninger/Yoga.vue'
import Spinning from '../views/holdtraeninger/Spinning.vue'
import Traeningsforloeb from '../views/Traeningsforloeb.vue'
import StrongStart from '../views/forloeb/StrongStart.vue'
import StrongLife from '../views/forloeb/StrongLife.vue'
import StaerkOvergang from '../views/forloeb/StaerkOvergang.vue'
import Moeder from '../views/Moeder.vue'
import Sponsor from '../views/Sponsor.vue'
import Kontakt from '../views/Kontakt.vue'
import Booking from '../views/Booking.vue'
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
      path: '/medlemskaber',
      name: 'medlemskaber',
      component: Medlemskaber
    },
    {
      path: '/personligtraening',
      name: 'personligtraening',
      component: PersonligTraening
    },
    {
      path: '/holdtraening',
      name: 'holdtraening',
      component: HoldTraening
    },
    {
      path: '/strongsenior',
      name: 'strongsenior',
      component: StrongSenior
    },
    {
      path: '/styrkehold',
      name: 'styrkehold',
      component: Styrkehold
    },
    {
      path: '/yoga',
      name: 'yoga',
      component: Yoga
    },
    {
      path: '/spinning',
      name: 'spinning',
      component: Spinning
    },
    {
      path: '/traeningsforloeb',
      name: 'traeningsforloeb',
      component: Traeningsforloeb
    },
    {
      path: '/strongstart',
      name: 'strongstart',
      component: StrongStart
    },
    {
      path: '/stronglife',
      name: 'stronglife',
      component: StrongLife
    },
    {
      path: '/staerkovergang',
      name: 'staerkovergang',
      component: StaerkOvergang
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: Sponsor
    },
    {
      path: '/moederogtraening',
      name: 'moederogtraening',
      component: Moeder
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
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
