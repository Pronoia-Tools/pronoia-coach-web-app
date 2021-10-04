import PronoiaAPI from "../../../api/PronoiaAPI";

export const signUp = async ({commit}, data) => {
  let response = await PronoiaAPI.post('/auth/register', data)
  commit("signUp", response.data)
  return true
}

export const login = async ({ commit }, data) => {
  try {
    let response = await PronoiaAPI.post('/auth/login', data)
    // console.log({"[[ACTIONS {{login}} ]]":response})
    commit("login", response.data)
    return response.data
  } catch (error) {
    console.log(error);
    return null;
  }
}