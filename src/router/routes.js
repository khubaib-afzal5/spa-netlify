import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TwoFa.vue') }
    ]
  },

  {
    path: '/forgot',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ForgotUsername.vue') }
    ]
  },

  {
    path: '/Username',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/YourUsername.vue') }
    ]
  },
  {
    path: '/Password',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ForgetPassword.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LoginPage.vue') }
    ]
  },

  {
    path: '/changepassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ChangePassword.vue') }
    ]
  },
  {
    path: '/Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/RegisterUser.vue') }
    ]
  },

  {
    path: '/Tandc',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TermsConditions.vue') }
    ]
  },

  {
    path: '/Accountinfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AccountInfo.vue') }
    ]
  },

  {
    path: '/Setuppassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/SetupPassword.vue') }
    ]
  },

  {
    path: '/Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') }
    ]
  },
  {
    path: '/Codemanagement',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Codemanagement.vue') }
    ]
  },
  {
    path: '/Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
export default routes
