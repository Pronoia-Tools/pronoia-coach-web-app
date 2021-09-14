export default {
  
  name: "WorkBookLayout",
  component: () =>
    import(
      /* webpackChunkName: "WorkBookLayout" */ "../Layouts/WorkBookLayout.vue"
    ),
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
    }
  ]
}
