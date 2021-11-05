import store from "../../../store"
export default {
  
  name: "SettingsLayout",
  component: () =>import(/* webpackChunkName: "SettingsLayout" */ "../Layouts/SettingsLayout.vue"),
  beforeEnter:(to,from,next)=>{
    if(store.state.auth.isAuthenticated){
      next()
    }else{
      console.log("Erorr isAuthenticated")
      next({name:"Home"})
    }
  },
  children: [
    {
      path: "profile",
      name: "Profile",
      // route level code-splitting
      // this generates a separate chunk (Profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Profile" */ "../Views/Profile.vue"),
    },
    {
      path: "security",
      name: "Security",
      // route level code-splitting
      // this generates a separate chunk (Security.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Security" */ "../Views/Security.vue"),
    },
  ]
}
