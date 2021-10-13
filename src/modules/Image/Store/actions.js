import PronoiaAPI from "../../../api/PronoiaAPI";
// import router from '../../../router'


export const loadImageLibrary = async ({ commit }) => {
  let response = await PronoiaAPI.get('/image');

  if (!response) return;
  commit("setImages", response.data);

  return response.data;

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