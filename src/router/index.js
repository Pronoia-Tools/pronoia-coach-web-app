import { createRouter, createWebHistory } from 'vue-router'
import workBookRouter from "../modules/Workbook/Router/index"
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "about" */ '../modules/SignUp/Views/SignUp.vue')
  },
  {
    path: "/workbook",
    ...workBookRouter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
