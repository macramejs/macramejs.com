import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import { createDocsRoutes } from './docs'
import App from './App.vue'
import './index.css'

const head = createHead();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/docs/:doc', component: App },
        { path: '/docs/:category/:doc', component: App },
    ]
});

createApp(App)
    .use(head)
    .use(router)
    .mount('#app')
