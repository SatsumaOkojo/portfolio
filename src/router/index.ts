import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
  
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',

      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/main',
      name: 'main',

      component: () => import('../views/MainView.vue')
    },
    {
      path: '/logout',
      name: 'logout',

      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/main',
      name: 'main',
 
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/proposal-table',
      name: 'proposal-table',

      component: () => import('../views/ProposalTableView.vue')
    },
    {
      path: '/proposal',
      name: 'proposal',

      component: () => import('../views/ProposalView.vue')
    },
    {
      path: '/proposal-post',
      name: 'proposal-post',

      component: () => import('../views/ProposalPostView.vue')
    },
    {
      path: '/create-user',
      name: 'create-user',

      component: () => import('../views/CreateUserView.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',

      component: () => import('../views/MypageView.vue')
    }
  ]
})

export default router
