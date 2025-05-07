import { createRouter, createWebHistory } from 'vue-router'
import HomeView2 from '@/views/HomeView2.vue';


const routes = [
  {
    path: '/HomeView2',
     name : 'Home-View2',
     component : HomeView2
  },
  
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
