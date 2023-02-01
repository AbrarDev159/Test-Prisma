import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from 'axios'

// axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.baseURL = 'http://10.0.0.48:1337/api/'

import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';