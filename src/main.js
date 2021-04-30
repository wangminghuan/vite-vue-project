import { createApp } from 'vue'
import App from './App.vue'
import http from "./http"
import router from "./router"
window.$http = http;
createApp(App).use(router).mount('#app')
