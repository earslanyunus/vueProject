import Axios from "../config/axios.js";

const getMovies = async (link)=>{
    const response = await Axios.get(link)
    return response.data
}
const getDetail = async (type,id)=>{
    const response = await Axios.get(`/${type}/${id}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US`)
    return response.data
}



export {getMovies,getDetail}
