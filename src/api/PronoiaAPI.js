import axios from "axios";
import store from "../store";

const PronoiaAPI = axios.create({ baseURL:  process.env.VUE_APP_API_BASE});

PronoiaAPI.interceptors.request.use(
  (config) => {
    let token = ""
    if (store && store.state && store.state.auth) token = store.state.auth.token;

    if (token !== "") {
      config.headers['authorization'] = `Bearer ${ token }`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);


export default PronoiaAPI