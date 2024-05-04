import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/landing/layouts/LandingLayout.vue'),
       children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/landing/pages/HomePage.vue'),
        },
      ] 
      }
  ] 
   
})

export default router
