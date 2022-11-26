import {createRouter,createWebHashHistory} from "vue-router";
const routes =[
    {
        name:'MovieHomePage',
        path:'/',
        component: () => import('../views/MovieHomePage.vue')
    }

]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router