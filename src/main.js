import { createApp } from 'vue'
import App from './App.vue'
import http from "./http"
import router from "./router"
const app=createApp(App)
app.use(router).mount('#app')
app.use(http)