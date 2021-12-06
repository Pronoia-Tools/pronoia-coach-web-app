import store from "../../../store"
import sales from "../../Sales/Router"
import customer from "../../Customer/Router"
export default {
  
  name: "WorkBookLayout",
  component: () =>import(/* webpackChunkName: "WorkBookLayout" */ "../Layouts/WorkBookLayout.vue"),
  beforeEnter:(to,from,next)=>{
    if(store.state.auth.isAuthenticated){
      next()
    }else{
      next({name:"login"})
    }
  },
  children: [
    {
      path:"",
      name:"no-workbook",
      component:()=>import(/* webpackChunkName: "NoEntryS" */ "../Views/NoWorkBookSelected.vue")
    },
    {
      path: ":idWorkBook",
      name: "workbook",
      component: () => import(/* webpackChunkName: "WoorkBook" */ "../Views/WorkBook.vue"),
      props: (route) => {
        return {
          idWorkBook: route.params.idWorkBook
        }
      }
    },
    // {
    //   path: ":idWorkBook/edit",
    //   name: "workbook-rich-text",
    //   component: () => import(/* webpackChunkName: "WoorkBookText" */ "../Views/WorkBookText.vue"),
    //   props: (route) => {
    //     return {
    //       idWorkBook: route.params.idWorkBook
    //     }
    //   }
    // }
    
    //},
    {
      path:"library",
      name:"workbookLibrary",
      component:()=>import(/* webpackChunkName: "NoEntryS" */ "../Views/WorkBooksLibrary.vue")
    },
    {
      path:"sales",
      ...sales
    },
    {
      path:"customer",
      ...customer
    },
  ]
}
