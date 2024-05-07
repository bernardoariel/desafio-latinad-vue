import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/auth/pages/LoginPage.vue'
import isAuthenticatedGuard from '../auth/guards/is-authenticated.guard';
import notAuthenticatedGuard from '../auth/guards/not-authenticated.guard';
import NotFound404 from '../pages/NotFound404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      beforeEnter: [isAuthenticatedGuard],
      redirect: { name: 'Home' },
      component: () => import('@/landing/layouts/LandingLayout.vue'),
       children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/landing/pages/HomePage.vue'),
        },
      ] 
    },
    {
      path: '/auth',
      name: 'Auth',
      beforeEnter: [notAuthenticatedGuard],
      component: () => import('@/auth/layouts/AuthLayout.vue'),
      redirect: { name: 'Login' },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginPage
        }
      ]
    },
     // Not Found
     {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ] 
   
})

export default router
