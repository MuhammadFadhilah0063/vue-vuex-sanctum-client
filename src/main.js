import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Configure Axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

const app = createApp(App)

app.use(router)

app.mount('#app')
