import { createRouter, createWebHistory } from 'vue-router'
import HomeView2 from '@/views/HomeView2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView2,
  },
  {
    path: '/HomeView2',
    name: 'HomeView2',
    component: HomeView2,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
