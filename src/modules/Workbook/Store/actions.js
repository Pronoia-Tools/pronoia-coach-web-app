// export const myAccion = async ({commit}) => {

// }

// export const myAccion = async ({commit},extValue) => {

// }

export const loadWorkbooks = async ({commit}) => {  
  const data = [
    {
      id:"1",
      title:"Build Your nest",
      published:new Date(),
      edition:1,
      language:"Spanish",
      price:30,
      status:"Published",
    },
    {
      id:"2",
      title:"Existing anyway",
      published:new Date(),
      edition:2,
      language:"English",
      price:50,
      status:"Editable",
    },
    {
      id:"3",
      title:"The world of busines",
      published:new Date(),
      edition:1,
      language:"English",
      price:200,
      status:"Uneditable",
    },
  ]
  setTimeout(() => {
    commit("setWorkbooks",data)
  }, 1000);
}
