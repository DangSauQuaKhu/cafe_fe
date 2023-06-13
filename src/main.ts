import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './axios';
import App from './App.vue'
import router from './router'
import './style.css'
const app = createApp(App)
const pinia = createPinia();
app.use(createPinia())
app.use(router)

app.mount('#app')
