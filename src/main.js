import { createApp } from 'vue'
import App from './App.vue'
import http from "./http"
import router from "./router"
const app=createApp(App)
app.config.globalProperties.$http = http;
app.use(router).mount('#app');

