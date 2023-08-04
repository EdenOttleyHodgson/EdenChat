import {createRouter, createWebHistory} from 'vue-router'
import MainMenu from './components/MainMenu.vue'
import ChatWindow from './components/ChatWindow.vue'
import SettingsWindow from './components/SettingsWindow.vue'
const router = createRouter({
   history: createWebHistory(),
   routes:[
       {path: '/menu', component: MainMenu},
       {path: '/chat', component: ChatWindow},
       {path: '/settings', component: SettingsWindow}
   ]
})
export default router
