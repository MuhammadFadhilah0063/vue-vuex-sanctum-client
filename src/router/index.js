import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import authStore from '@/store/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      async beforeEnter(to, from, next) {
        await authStore.dispatch('user')
        if (authStore.state.authStatus) {
          next()
        }
        next({
          name: 'Home'
        })
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue')
    }
  ]
})

export default router
