import { createStore } from 'vuex'
import workBookStorage from "@/modules/Workbook/Store/index"
import authStorage from "@/modules/Auth/Store/index"

export default createStore({
  modules: {
    workBook: workBookStorage,
    auth: authStorage,
  }
})
