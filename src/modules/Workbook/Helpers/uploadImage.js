import PronoiaAPI from "../../../api/PronoiaAPI"


export const uploadImageWorkbook = async (file) => {
  if (!file) return

  try {
    const formData = new FormData()
    formData.append("file",file)
    const {data} =await PronoiaAPI.post("workbook/image",formData)

    return data.urlImage
  } catch (error) {
    console.error("Error al cargar la imagen")
    return null
  }
}

// export const uploadImagesEditor = async (workbook,files) => {
//   if (!files) return
//   console.log({
//     workbook,
//     files
//   })
//   try {
//     const formData = new FormData()
//     files.forEach(file => {
//       formData.append("images",file)  
//     });
    
//     const data = await PronoiaAPI.post(`workbook/${workbook}/images`,formData)

//     console.log({data})
//     return data.urlImage
//   } catch (error) {
//     console.error("Error al cargar la imagen")
//     return null
//   }
// }
