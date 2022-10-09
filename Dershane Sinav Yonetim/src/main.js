import {createApp} from "vue";
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import "bootstrap/dist/css/bootstrap.min.css"
import SinavCard from "@/components/shared/sinavSonucCard/IndexPage.vue";
import {Axios} from "@/utils/axios";
import '@/style.css'



const app = createApp(App)

app.component("SinavCard",SinavCard)
app.use(router)
app.use(store)
app.config.globalProperties.$router = router
app.config.globalProperties.$Axios = Axios
app.mount('#app')
