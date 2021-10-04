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

export const login = (state, {user,token}) => {
  // console.log({"[[Mutations {{login}}]]":user})
  state.user = user
  state.token = token
  state.isAuthenticated = true
}

export const logout = (state) => {
  // console.log("[[Mutations {{logout}}]]")
  state.user = {}
  state.token = ""
  state.isAuthenticated = false
}
