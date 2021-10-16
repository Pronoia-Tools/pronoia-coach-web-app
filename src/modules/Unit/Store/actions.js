import PronoiaAPI from "../../../api/PronoiaAPI";
// import router from '../../../router'


export const loadUnitLibrary = async ({ commit }) => {
  let response = await PronoiaAPI.get('/unit');

  if (!response) return;
  commit("setUnits", response.data);

  return response.data;

}
