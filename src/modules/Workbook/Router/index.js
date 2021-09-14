export default {
  
  name: "WorkBookLayout",
  component: () =>
    import(
      /* webpackChunkName: "WorkBookLayout" */ "../Layouts/WorkBookLayout.vue"
    ),
  children: [
    {
      path: ":id",
      name: "woorkbook",
      component: () =>
        import(/* webpackChunkName: "WoorkBook" */ "../Views/WorkBook.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../../Login/Views/Login.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
