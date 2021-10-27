import PronoiaAPI from "../../../api/PronoiaAPI";
// import router from '../../../router'
import { storage } from "@/firebase/firebase";

export const loadImageLibrary = async ({ commit },email) => {
  // let response = await PronoiaAPI.get('/image');
  console.log(commit)
  // if (!response) return;
  // commit("setImages", response.data);

  // return response.data;

  var listRef = storage.ref(`Galery/${email}`);

  // Find all the prefixes and items.
  const itemsRef = await listRef.listAll()

  let urls = await Promise.all(
    itemsRef.items.map(async itemRef => {
      // All the items under listRef.
      console.log({itemRef})
      const imageURL = await itemRef.getDownloadURL()
      console.log(imageURL)
      return imageURL
    })
  )
  console.log(urls)
  commit("setImages", urls);
  return urls;
}

export const uploadImages = async ({ commit }, images) => {
  const formData = new FormData()
  images.forEach(file => {
    formData.append("images",file)  
  });
  
  const response = await PronoiaAPI.post('/image', formData)
  
  if (!response) return;
  commit("setImages", response.data);

  return response.data;

}