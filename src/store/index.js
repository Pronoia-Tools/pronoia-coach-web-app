import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import workBookStorage from "@/modules/Workbook/Store/index"
import authStorage from "@/modules/Auth/Store/index"
import imageStorage from "@/modules/Image/Store/index"

export default createStore({
  modules: {
    workBook: workBookStorage,
    auth: authStorage,
    image: imageStorage,
  },
  plugins: [
    createPersistedState({
      key: 'vuex',
      reducer (state) {
        console.log(state)
        if(state.auth.isAuthenticated === false) { 
          return {}
        }
        return state
      },

      paths:[
        "workBook",
        "auth",
        "image",
      ]
    })
  ]
})
