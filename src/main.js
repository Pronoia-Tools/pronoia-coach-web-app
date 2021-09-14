import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './registerServiceWorker'
import i18n from './i18n'
import * as rules from "./formRules"

//calls every rule to apply inside forms
rules

createApp(App).use(i18n).use(store).use(router).mount('#app')
