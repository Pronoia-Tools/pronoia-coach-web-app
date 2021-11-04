import PronoiaAPI from "../../../api/PronoiaAPI"
import { storage } from "@/firebase/firebase";

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

export const handleFileUploadOnFirebaseStorage = async ({email,file}) => {
  // 1. If no file, return
  if (file === "") return "";
  
  const dateSaved = new Date().getTime()

  // 2. Put the file into bucketName
  const uploadTask = await storage.ref(`/Galery/${email}/${file.name}_${dateSaved}`).put(file);
  
  // 3. Get download URL and return it as 
  return uploadTask.ref.getDownloadURL().then((fileURL) => fileURL);
};

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
