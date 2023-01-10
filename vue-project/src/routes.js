import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Auth from './layouts/Auth.vue'
import Main from './layouts/Main.vue'

const routes = [
    {
        path: "/login",
        name: "login",
        component: Auth
    },
    {
        path: "/",
        component: Main,
        children: [
            {
                path: '',
                name: "dashboard",
                component: () => import('./views/dashboard/index.vue')
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('./views/Notfound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router