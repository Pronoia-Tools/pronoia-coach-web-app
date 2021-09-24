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
      tags:["1","11","sasad"],
      sections:[
        {
          "type": "doc",
          "content": [
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  }
              },
              {
                  "type": "horizontalRule"
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 1
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 1"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio."
                      }
                  ]
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 2
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 1.1"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique."
                      }
                  ]
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 3
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 1.1.1"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  },
                  "content": [
                      {
                          "type": "hardBreak"
                      }
                  ]
              }
          ]
        },
        {
          "type": "doc",
          "content": [
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  }
              },
              {
                  "type": "horizontalRule"
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 1
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 2"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio."
                      }
                  ]
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 2
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 2.1"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique."
                      }
                  ]
              },
              {
                  "type": "heading",
                  "attrs": {
                      "textAlign": "left",
                      "level": 3
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "SECTION 2.1.1"
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "justify"
                  },
                  "content": [
                      {
                          "type": "text",
                          "text": "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla."
                      }
                  ]
              },
              {
                  "type": "paragraph",
                  "attrs": {
                      "textAlign": "left"
                  },
                  "content": [
                      {
                          "type": "hardBreak"
                      }
                  ]
              }
          ]
        }
      ]
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
      tags:["1","2","sasad"],
      sections:[]
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
      tags:["1","3","sasad"],
      sections:[
        {
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "left"
                    }
                },
                {
                    "type": "horizontalRule"
                },
                {
                    "type": "heading",
                    "attrs": {
                        "textAlign": "left",
                        "level": 1
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "SECTION 1"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "left"
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis sollicitudin, consectetur massa ut, gravida leo. Aliquam sed tortor tortor. Integer feugiat eget sem quis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget ligula a libero sodales ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed erat eu sapien venenatis condimentum. Sed scelerisque pretium diam eu ullamcorper. Suspendisse id pulvinar turpis. Morbi malesuada imperdiet ante, vel volutpat mi aliquet eu. Nunc vitae arcu id odio luctus venenatis in et ipsum."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "justify"
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "Vestibulum eget pretium mauris. In ultricies molestie quam, dignissim feugiat augue lobortis a. Integer eget nunc sed elit facilisis dignissim sed sed elit. Sed at dui ipsum. Mauris metus erat, consectetur quis ornare at, ultricies in velit. Phasellus a justo a nunc porta efficitur. Proin elit nulla, posuere sed elementum eu, blandit eget libero. Integer pulvinar est sed nisi gravida euismod. Vivamus at lectus tempor, convallis ligula at, congue risus. Nunc ligula arcu, ultrices et pellentesque quis, posuere at nisl. Quisque finibus nec nunc et vulputate. Donec consectetur nunc sit amet facilisis ultrices. Fusce vel iaculis metus. Vivamus at velit odio."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "attrs": {
                        "textAlign": "left",
                        "level": 2
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "SECTION 1.1"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "justify"
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "Proin a sapien bibendum, fringilla odio at, semper metus. Proin eu libero semper, interdum est id, fringilla eros. Proin cursus orci lacus, ut gravida augue pretium sit amet. Sed eros nulla, vestibulum at sollicitudin et, tincidunt et enim. Etiam tincidunt neque ac maximus rhoncus. Proin consequat at neque a lacinia. Nullam vel vehicula leo, ut sodales ante."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "justify"
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "Nulla facilisi. Vivamus quis eros urna. Donec ultrices efficitur dolor, et cursus purus sagittis in. Nunc tincidunt dolor enim, at malesuada lectus consequat ut. Nullam fringilla libero sit amet est cursus, et cursus dui accumsan. Proin non tortor gravida, malesuada enim vulputate, interdum tortor. Vestibulum nec odio rhoncus, venenatis erat eu, ultricies diam. Phasellus facilisis, metus sit amet consectetur facilisis, nisl nisi varius tortor, ullamcorper sagittis nisl ligula sit amet arcu. Cras facilisis tincidunt ipsum, ut interdum nibh dictum in. Vivamus sodales commodo metus, quis efficitur justo volutpat in. Nullam aliquam sapien a lacus consectetur viverra. Nam sollicitudin tellus ut libero tincidunt elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem quam, sit amet egestas nunc blandit vel. Ut ultrices nec tellus sit amet vehicula. Nam sollicitudin nisi mauris, eu ultrices arcu feugiat tristique."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "attrs": {
                        "textAlign": "left",
                        "level": 3
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "SECTION 1.1.1"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "justify"
                    },
                    "content": [
                        {
                            "type": "text",
                            "text": "Nullam interdum quis lorem nec lobortis. Vivamus tincidunt varius massa id pellentesque. Morbi sem nunc, vulputate sit amet mollis id, vestibulum vel felis. Nunc ut enim felis. Nam massa enim, lobortis nec commodo a, consectetur at diam. Quisque varius felis tellus, eget porta lacus suscipit vel. Praesent felis ante, rutrum vitae molestie et, condimentum ut magna. Phasellus sodales felis vitae est tincidunt venenatis. Suspendisse non elit lacinia, varius metus a, pretium leo. Cras imperdiet hendrerit hendrerit. Cras imperdiet elit id augue cursus interdum. Sed vel ipsum eget elit congue vestibulum. Ut vel massa sapien. Donec nibh justo, blandit at libero id, laoreet bibendum nulla."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "attrs": {
                        "textAlign": "left"
                    },
                    "content": [
                        {
                            "type": "hardBreak"
                        }
                    ]
                }
            ]
          },
      ]
    },
  ]
  setTimeout(() => {
    commit("setWorkbooks",data)
  }, 1000);
}

export const saveWorkbook = async ({commit},workbook) =>{
  // console.log(commit,workbook)

  
  const data = await new Promise(resolve => setTimeout(() => resolve(workbook), 1000));
  if(!data) return
  console.log(data)
  commit("saveWorkbook",{id:"4" ,...data})

  return true
}

export const updateWorkbook = async ({commit},workbook) =>{
  console.log(commit,workbook)

  const data = await new Promise(resolve => setTimeout(() => resolve(workbook), 1000));
  if(!data) return

  commit("updateWorkbook",data)

  return true
}

export const updateWorkbookSection = async ({commit},section) =>{
  
    const data = await new Promise(resolve => setTimeout(() => resolve(section), 1000));
    if(!data) return
    console.log({"updateWorkbookSection {{action}}":data})
  
    commit("updateWorkbookSection",data)
  
    return true
}
export const updateWorkbookAddSection = async ({commit},idWorkBook) =>{
  
    const data = await new Promise(resolve => setTimeout(() => resolve(idWorkBook), 1000));
    if(!data) return
    console.log({"updateWorkbookAddSection {{action}}":idWorkBook})
  
    commit("updateWorkbookAddSection",idWorkBook)
  
    return true
}

export const deleteWorkbook = async ({commit},id) =>{
  console.log(commit,id)

  // if(!data) return
  const data = await new Promise(resolve => setTimeout(() => resolve(id), 1000));
  if(!data) return

  commit("deleteWorkbook",id)

  return true
}