import { createRouter, createWebHistory } from 'vue-router'
import Damage from '../views/Damage.vue'
import Queue from '../views/Queue.vue'

const routes = [
  {
    path: '/damage',
    name: 'Damage',
    component: Damage
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
