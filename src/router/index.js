import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/contactInfo/:id',
    name: 'contactInfo',
    component: () => import('../views/contactInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
