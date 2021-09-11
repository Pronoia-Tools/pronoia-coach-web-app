// export const myMutation = async (state) => {

// }

// export const myMutation = async (state,extValue) => {

// }
export const setWorkbooks = (state,workbooks) => {
  state.workbooks = [...state.workbooks, ...workbooks]
  state.loading = false
}