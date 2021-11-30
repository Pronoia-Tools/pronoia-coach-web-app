export const getUserAuth = (state) =>{
  // console.log(id)
  const userData = {
    user:state.user,
    token:state.token,
    isAuthenticated:state.isAuthenticated
  }

  return userData
}

export const getCustomTokenAuthFirebase = (state) =>{
  // console.log(id)
  return state.customTokenAuthFirebase
}

// export const getWorkBookByTitle = (state) => (search="",language="",status="") => {
//   // console.log(state,search,language,status)
//   if(search.length === 0 && language.length === 0 && status.length === 0) return state.workbooks

//   return state.workbooks.filter(workbook => {
//     if ((workbook.title.toLowerCase().includes(search.toLowerCase()) && search!=="") || workbook.language===language || workbook.status===status ) {
//       return workbook
//     }
//   })
// }
// export const getWorkBookById = (state) => (id) =>{
//   // console.log(id)
//   const workbook = state.workbooks.find(workbook => workbook.id === id)
//   if(!workbook) return 

//   return {...workbook}
// }

