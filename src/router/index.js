import {createRouter, createWebHistory} from 'vue-router';
import {router} from '../domains/groceries/routes.js';

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
