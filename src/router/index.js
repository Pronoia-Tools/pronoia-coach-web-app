import { createRouter, createWebHistory } from "vue-router";
import workBookRouter from "../modules/Workbook/Router/index";
import settingsRouter from "../modules/Auth/Router/index";
import store from "@/store"
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: '/login',
    name: "Home",
    // component: Home,
  },
  {
    path: "/success",
    name: "success",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/Auth/Views/Success.vue"
      ),

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
    path: "/settings",
    ...settingsRouter,
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
  },
  {
    path: "/workbook/:idWorkBook/preview",
    name: "workbook-rich-text-preview",
    component: () => import(/* webpackChunkName: "WoorkBookText" */ "../modules/Workbook/Views/WorkbookPreview.vue"),
    props: (route) => {
      return {
        idWorkBook: route.params.idWorkBook
      }
    }
  },
  {
    path: "/workbook/:idWorkBook/view",
    name: "workbook-rich-text-view",
    component: () => import(/* webpackChunkName: "WoorkBookText" */ "../modules/Workbook/Views/WorkbookPreview.vue"),
    props: (route) => {
      return {
        idWorkBook: route.params.idWorkBook
      }
    }
  },
  {
    path: "/workbook/:idWorkBook/read",
    name: "workbook-rich-text-read",
    component: () => import(/* webpackChunkName: "WoorkBookText" */ "../modules/Workbook/Views/WorkbookRead.vue"),
    beforeEnter:(to,from,next)=>{
      if(store.state.auth.isAuthenticated){
        next()
      }else{
        next({name:"login"})
      }
    },
    props: (route) => {
      return {
        idWorkBook: route.params.idWorkBook
      }
    }
    
  },
  {
    path:"/library",
    name:"workbookLibrary",
    component:()=>import(/* webpackChunkName: "NoEntryS" */ "../modules/Workbook/Views/WorkBooksLibrary.vue")
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
