import PronoiaAPI from "../../../api/PronoiaAPI";

export const signUp = async ({ commit }, data) => {
  let response = await PronoiaAPI.post("/auth/register", data);
  commit("signUp", response);
  return true;
};

export const login = async ({ commit }, data) => {
  try {
    let response = await PronoiaAPI.post("/auth/login", data);
    console.log({ "[[ACTIONS {{login}} ]]": response });
    commit("login", response.data);
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } else return 500;
  }
};
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
