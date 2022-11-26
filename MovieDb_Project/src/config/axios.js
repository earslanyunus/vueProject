import axios from "axios"

const Axios = axios.create({
    baseURL: ' https://api.themoviedb.org/3/', //TMBD api base url for get data
})

export default Axios