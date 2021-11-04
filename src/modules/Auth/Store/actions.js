import PronoiaAPI from "../../../api/PronoiaAPI";
import router from '../../../router'

export const loadSession = async ({ commit }) => {
  let session = window.localStorage.getItem(process.env.VUE_APP_API_BASE)
  if(session) {
    let config = {
      headers: {
        authorization: `Bearer ${ session }`,
      }
    }
    let response = await PronoiaAPI.post('/auth/refresh', {}, config);
    commit("login", response.data)
    return response.data
  }
  return true
}

export const signUp = async ({commit}, data) => {
  let response = await PronoiaAPI.post('/auth/register', data)
  if(response.data && response.data.token)
      window.localStorage.setItem(process.env.VUE_APP_API_BASE, response.data.token)
  commit("signUp", response.data)
  return true
}

export const login = async ({ commit }, data) => {
  
    let response = await PronoiaAPI.post('/auth/login', data)
    // console.log({"[[ACTIONS {{login}} ]]":response})
    if(response.data && response.data.token)
      window.localStorage.setItem(process.env.VUE_APP_API_BASE, response.data.token)
    commit("login", response.data)
    return true
}

export const logout = async ({ commit }) => {
  let response = await PronoiaAPI.post('/auth/logout', {})
  window.localStorage.removeItem(process.env.VUE_APP_API_BASE)
  commit("logout", response.data)
  router.push({name:"Home"});
  return true

}