import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/qqmusic',
    name: 'Qqmusic',
    component: () => import('../views/qqmusic.vue')
  },
  {
    path: '/qqsongsheet/:disstid',
    name: 'qqsongsheet',
    component: () => import('../views/qqsongsheet.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
