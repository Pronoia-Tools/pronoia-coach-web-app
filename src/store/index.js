import { createStore } from 'vuex'
import woordBookStorage from "@/modules/Workbook/Store/index"

export default createStore({
  modules: {
    woordBook: woordBookStorage
  }
})
