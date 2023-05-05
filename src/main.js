import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import authStore from './store/auth'
import axios from 'axios'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Configure Axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

authStore.dispatch('user')
    .then(() => {
        createApp(App).use(store).use(router).mount('#app')
    })
