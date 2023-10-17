import { createRouter, createWebHistory } from 'vue-router';

import voteView from '../views/VoteView.vue';

const routes = [
    {path:'/', component: voteView, alias:'/home', name:'home'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 