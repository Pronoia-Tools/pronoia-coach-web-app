export default {
  name: "workbook-editor-layout",
  component: () => import(/* webpackChunkName: "WoorkBookText" */ "../Layout/EditorLayout.vue"),
  props: (route) => {
    return {
      idWorkBook: route.params.idWorkBook
    }
  },
  children:[
    {
      path: ":section",
      name: "workbook-rich-text",
      component: () => import(/* webpackChunkName: "WoorkBookText" */ "../Views/WorkBookText.vue"),
      props: (route) => {
        return {
          idWorkBook: route.params.idWorkBook,
          section:route.params.section
        }
      }
    },
  ]
}