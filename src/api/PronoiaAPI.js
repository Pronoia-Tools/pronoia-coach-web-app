import axios from "axios";

const PronoiaAPI = axios.create({
  baseURL:  process.env.VUE_APP_API_BASE,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default PronoiaAPI