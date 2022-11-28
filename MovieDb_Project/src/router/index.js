import {createRouter,createWebHashHistory} from "vue-router";
const routes =[
    {
        name:'MovieHomePage',
        path:'/',
        component: () => import('../views/MovieHomePage.vue')
    },
    {
        name:'DetailPage',
        path: '/detail/:id',
        component: () => import('../views/DetailPage.vue'),
        props:true
    },
    {
        name:'SeriesPage',
        path:'/series',
        component: () => import('../views/SeriesPage.vue')
    },
    {
        name:'SearchPage',
        path:'/search',
        component: () => import('../views/SearchPage.vue')
    },
    {
        name:'DiscoverPage',
        path:'/discover',
        component: () => import('../views/DiscoverPage.vue')
    },
    {
        name:'UserPage',
        path:'/profile',
        component: () => import('../views/ProfilePage.vue')
    }





]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router