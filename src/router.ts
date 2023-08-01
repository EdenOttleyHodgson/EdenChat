import {createRouter, createWebHistory} from 'vue-router'
import MainMenu from './components/MainMenu.vue'
import ChatWindow from './components/ChatWindow.vue'
const router = createRouter({
   history: createWebHistory(),
   routes:[
       {path: '/menu', component: MainMenu},
        

        {path: '/chat', component: ChatWindow}
   ]
})
export default router
