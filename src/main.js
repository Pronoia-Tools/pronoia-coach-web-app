import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './registerServiceWorker'
import i18n from './i18n'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import * as rules from "./formRules"

const options = {
  confirmButtonColor: 'rgb(153, 27, 27)',
  cancelButtonColor: 'rgb(91, 33, 182)',
  denyButtonText:'rgb(91, 33, 182)'
};
//calls every rule to apply inside forms
rules

createApp(App)
  .use(VueSweetalert2,options)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
