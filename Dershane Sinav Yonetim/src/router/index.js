import {createRouter , createWebHashHistory} from "vue-router";
import store from "@/store";
const routes = [
    {
        name:'HomePage',
        path:'/',
        component : () =>import("@/views/HomePage.vue")
    },{
        name:'LoginPage',
        path:'/login',
        component : () =>import("@/views/LoginPage.vue")
    },
    {
        name:'RegisterPage',
        path:'/register',
        component : () =>import("@/views/RegisterPage.vue")
    },
    {
        name:'NewExam',
        path:'/newexam',
        component : () =>import("@/views/NewExam.vue")
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach((to,from,next)=>{
    const loginRequired = ["HomePage","NewExam"]
    const NOTloginRequired = ["LoginPage","RegisterPage"]
    const _isLogin = store.getters._isLogin
    if (NOTloginRequired.indexOf(to.name)>-1 && _isLogin){
        next(false)
    }

    if (loginRequired.indexOf(to.name)>-1){
        if (_isLogin){
            next()
        }else{
            next({name:"LoginPage"})
        }
    }else{
        next()
    }
})

export default router