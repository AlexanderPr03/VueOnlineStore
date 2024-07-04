import { createRouter, createWebHistory } from 'vue-router';


// Importam vederile
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CartView from '@/views/CartView.vue';


const routes = [
    {
        path: '/home',
        component: HomeView,
        name: 'Home'
    },
    {
        path: '/about',
        component: AboutView,
        name: 'About'
    },
    {
        path: '/cart',
        component: CartView,
        name: 'Cart'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;