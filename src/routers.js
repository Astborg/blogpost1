import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: () => import ('./main'),
        path: '/'
    },
    {
        name: 'homePosts',
        component: () => import ('./views/homePosts.vue'),
        path: '/homePosts'
    },
    {
        name: 'writePost',
        component: () => import('./views/writePost.vue'),
        path: '/writePost'
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router