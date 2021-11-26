export const signUp = (state, {user,token}) => {
  state.user = user;
  if (token !== '') {
    state.isAuthenticated = true
    state.token = token
  } else{
    state.isAuthenticated = false
    state.token = ''
  }
}

export const login = (state, {user,token,customToken}) => {
  // console.log({"[[Mutations {{login}}]]":user})
  state.user = user
  state.token = token
  state.isAuthenticated = true
  state.customToken = customToken
}

export const logout = (state) => {
  // console.log("[[Mutations {{logout}}]]")
  state.user = {}
  state.token = ""
  state.isAuthenticated = false
}

export const updateUser = (state,userData) => {
  console.log({"[[Mutations {{updateUser}}]]":userData})
  state.user = userData.user
}

export const updatePassword = (state,response) => {
  console.log({"[[Mutations {{updatePassword}}]]":response})
}
