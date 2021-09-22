// export const getWorkBooks = (state) =>{
//   // console.log(id)
//   const workbooks = state.workbooks
//   console.log(workbooks)
//   if(!workbooks) return 

//   return [...workbooks]
// }
// export const getLoading = (state) =>{
//   // console.log(id)
//   const loading = state.loading

//   return loading
// }

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

