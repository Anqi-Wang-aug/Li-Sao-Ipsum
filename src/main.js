import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

const word = {template: '<div>Word</div>'}
const paragraph = {template: '<div>Paragraph</div>'}

const routes = [
    { path: '/word', component: word },
    { path: '/paragraph', component: paragraph },
]
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
