import { createStore } from 'vuex'
import workBookStorage from "@/modules/Workbook/Store/index"

export default createStore({
  modules: {
    workBook: workBookStorage
  }
})
