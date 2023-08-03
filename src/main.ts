
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css';
const app = createApp(App)
app.use(router)
app.mount('#app')

if (localStorage.getItem("name") === null) {
    localStorage.setItem("name", "Anonymous")
}
