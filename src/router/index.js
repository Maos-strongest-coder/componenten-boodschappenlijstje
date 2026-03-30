import {createRouter, createWebHistory} from 'vue-router';
import routes from '../domains/groceries/routes.js';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
