export default {
  name: "WorkBookLayout",
  component: () => import(/* webpackChunkName: "WorkBookLayout" */ "../Layouts/WorkBookLayout.vue"),
  children: [
    {
      path:"",
      name:"no-woorkbook",
      component:()=>import(/* webpackChunkName: "NoEntryS" */ "../Views/NoWorkBookSelected.vue")
    },
    {
      path: ":id",
      name: "woorkbook",
      component: () => import(/* webpackChunkName: "WoorkBook" */ "../Views/WorkBook.vue"),
      props: (route) => {
        return {
          id: route.params.id
        }

      }
    }
  ]
}