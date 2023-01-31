import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView/index.vue')
  },
  {
    path: '/signup',
    name: 'sigup',
    component: () => import('@/views/SignUpView/index.vue')
  },
  {
    path: '/forgot-my-password',
    name: 'forgotPassword',
    component: () => import('@/views/ForgotPasswordView/index.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: () => import('@/views/PrivacyPolicyView/index.vue')
  },
  {
    path: '/use-terms',
    name: 'useTerms',
    component: () => import('@/views/UseTermsView/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
