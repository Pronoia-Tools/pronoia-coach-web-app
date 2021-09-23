import { createRouter, createWebHistory } from "vue-router";
import workBookRouter from "../modules/Workbook/Router/index";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/Auth/Views/SignUp.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/Auth/Views/Login.vue"
      ),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../modules/List/Views/List.vue"),
  },
  {
    path: "/workbook",
    ...workBookRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
