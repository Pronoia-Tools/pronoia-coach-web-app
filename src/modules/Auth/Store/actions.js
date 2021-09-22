import axios from "axios";

const api_base = process.env.VUE_APP_API_BASE

export const signUp = async ({commit}, data) => {
  let response = await axios.post(api_base+'/auth/register', data)
  commit("signUp", response)
  return true
}
// export const saveWorkbook = async ({commit},workbook) =>{
//   // console.log(commit,workbook)

  
//   const data = await new Promise(resolve => setTimeout(() => resolve(workbook), 1000));
//   if(!data) return
//   console.log(data)
//   commit("saveWorkbook",{id:"4" ,...data})

//   return true
// }

// export const updateWorkbook = async ({commit},workbook) =>{
//   console.log(commit,workbook)

//   const data = await new Promise(resolve => setTimeout(() => resolve(workbook), 1000));
//   if(!data) return

//   commit("updateWorkbook",data)

//   return true
// }

// export const deleteWorkbook = async ({commit},id) =>{
//   console.log(commit,id)

//   // if(!data) return
//   const data = await new Promise(resolve => setTimeout(() => resolve(id), 1000));
//   if(!data) return

//   commit("deleteWorkbook",id)

//   return true
// }