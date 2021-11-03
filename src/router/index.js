import { createRouter, createWebHistory } from "vue-router";
import workBookRouter from "../modules/Workbook/Router/index";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: '/login',
    name: "Home",
    // component: Home,
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../modules/Auth/Views/Settings.vue"),
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
    path: "/restore",
    name: "restore-password",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/Auth/Views/Restore.vue"
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
  {
    path: "/workbook/:idWorkBook/edit",
    name: "workbook-rich-text",
    component: () => import(/* webpackChunkName: "WoorkBookText" */ "../modules/Workbook/Views/WorkBookText.vue"),
    props: (route) => {
      return {
        idWorkBook: route.params.idWorkBook
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
