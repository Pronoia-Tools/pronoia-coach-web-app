import { createStore } from 'vuex'
import workBookStorage from "@/modules/Workbook/Store/index"
import authStorage from "@/modules/Auth/Store/index"
import imageStorage from "@/modules/Image/Store/index"

export default createStore({
  modules: {
    workBook: workBookStorage,
    auth: authStorage,
    image: imageStorage,
  }
})
