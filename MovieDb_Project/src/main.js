import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faGithub,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faHouse,faMagnifyingGlass,faLightbulb,faUser,faTv,faFilm} from "@fortawesome/free-solid-svg-icons";


library.add(faGithub,faTwitter,faHouse,faMagnifyingGlass,faLightbulb,faUser,faTv,faFilm)
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')

