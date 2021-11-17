// export const myMutation = async (state) => {

// }

// export const myMutation = async (state,extValue) => {

// }
export const empty = (state) => {
  return state
}

export const setTags = (state, tags) => {
  state.tags = [...tags]
  state.loading = false
}

export const setTagsOnWorkbook = (state,{idWorkBook,tagNew}) => {
    const newWorkbookList = state.workbooks.map(eWorkbook => {
      if (eWorkbook.id == idWorkBook) {
        eWorkbook.tags.push(tagNew)
        console.log('estoy entrando')
      }
      console.log(eWorkbook)
      return eWorkbook
    })
    state.workbooks = newWorkbookList
}

export const setWorkbooks = (state, workbooks) => {
  state.workbooks = [...state.workbooks, ...workbooks]
  state.loading = false
}
export const saveWorkbook = (state, workbook) => {
  state.workbooks.push(workbook)
}

export const updateWorkbook = (state, workbook) => {
  const newWorkbookList = state.workbooks.map(eWorkbook => {
    if (eWorkbook.id === workbook.id) {
      return workbook
    }else{
      return eWorkbook
    }
  })
  state.workbooks = newWorkbookList
}

export const deleteWorkbook = (state, workbook) => {
  const newWorkbookList = state.workbooks.filter(eWorkbook => eWorkbook.id !== workbook.id)
  state.workbooks = newWorkbookList
}

//UNITS

export const updateWorkbookSection = (state,{idWorkBook,sectionSelected,json}) => {
  const newWorkbookList = state.workbooks.map(eWorkbook => {
    if (eWorkbook.id === idWorkBook) {
      console.log({"updateWorkbookSection {{mutation}}":json ,"sectionSelected":sectionSelected})
      const newWorkbook = {...eWorkbook}
      newWorkbook.sections[sectionSelected] = json
      return newWorkbook
    }else{
      return eWorkbook
    }
  })
  console.log({newWorkbookList})
  state.workbooks = newWorkbookList
}

export const updateWorkbookAddSection = (state,{idWorkBook}) => {
  const newWorkbookList = state.workbooks.map(eWorkbook => {
    if (eWorkbook.id === idWorkBook) {
      const newWorkbook = {...eWorkbook}
      newWorkbook.sections[eWorkbook.sections.length] = { 
        type:"doc",
        content:[],
        questions:[]
      }

      return newWorkbook
    }else{
      return eWorkbook
    }
  })
  state.workbooks = newWorkbookList
}

export const updateWorkbookAddQuestion = (state,{idWorkbook, sectionSelected, newQuestion}) => {
  console.log({"{{mutation}} updateWorkbookAddQuestion":{idWorkbook, sectionSelected, newQuestion}})
  const newWorkbookList = state.workbooks.map(eWorkbook => {
    if (eWorkbook.id === idWorkbook) {
      const newWorkbook = {...eWorkbook}
      newWorkbook.sections[sectionSelected].questions.push(newQuestion)

      return newWorkbook
    }else{
      return eWorkbook
    }
  })
  state.workbooks = newWorkbookList
}

