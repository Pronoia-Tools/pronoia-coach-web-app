// // export const myMutation = async (state) => {

// // }

// // export const myMutation = async (state,extValue) => {

// // }
// export const setWorkbooks = (state,workbooks) => {
//   state.workbooks = [...state.workbooks, ...workbooks]
//   state.loading = false
// }
export const signUp = (state, data) => {
  state.user = data.user
  if (data.token !== '') {
    state.isAuthenticated = true
    state.token = data.token
  } else{
    state.isAuthenticated = false
    state.token = ''
  }
}

// export const updateWorkbook = (state,workbook) => {
//   const newWorkbookList = state.workbooks.map(eWorkbook => {
//     if (eWorkbook.id === workbook.id) {
//       return {...workbook}
//     }else{
//       return eWorkbook
//     }
//   })
//   state.workbooks = newWorkbookList
// }

// export const deleteWorkbook = (state,id) => {
//   const newWorkbookList = state.workbooks.filter(eWorkbook => eWorkbook.id !== id)
//   state.workbooks = newWorkbookList
// }