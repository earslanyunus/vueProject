import Axios from "../config/axios.js";

const getMovies = async (link)=>{
    const response = await Axios.get(link)
    return response.data
}

export {getMovies}
