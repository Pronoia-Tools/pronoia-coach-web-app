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
      currency:"USD",
      status:"Published",
      author:"Victor Manuel",
      tags:["1","11","sasad"]
    },
    {
      id:"2",
      title:"Existing anyway",
      published:new Date(),
      edition:2,
      language:"English",
      price:50,
      currency:"USD",
      status:"Editable",
      author:"Victor Manuel",
      tags:["1","2","sasad"]
    },
    { 
      id:"3",
      title:"The world of busines",
      published:new Date(),
      edition:1,
      language:"English",
      price:200,
      currency:"USD",
      status:"Uneditable",
      author:"Victor Manuel",
      tags:["1","3","sasad"]
    },
  ]
  setTimeout(() => {
    commit("setWorkbooks",data)
  }, 1000);
}
