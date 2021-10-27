
export const setImages = (state, images) => {
  console.log(images)
  state.imageLibrary = [...state.imageLibrary, ...images]
}
