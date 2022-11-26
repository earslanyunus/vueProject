import {ref} from "vue";
import {getMovies} from "./FunctionsMovieDb.js";

//verileri carousele gondermek icin bu degiskeni kullaniyoruz
const TrendImages = ref([])
const PopularImages = ref([])
const TopRatedImages = ref([])
const ComingSoonImages = ref([])

// Api dan gelen trend arrayini istedigimiz sekle ayarlamak icin kullandigimiz function
const filterImage = (data,array) => {
    data.results.forEach(elm => {
        const data = {
            imageUrl: `https://image.tmdb.org/t/p/original/${elm.backdrop_path}`,
            id: elm.id,
            title: elm.original_title,
            posterUrl:`https://image.tmdb.org/t/p/original${elm.poster_path}`
        }
        array.value.push(data)
    })

}

//api dan trend filmleri alip filterdan geciriyoruz
const sendMovie = async (link,list)=>{
    const data = await getMovies(link)
    await filterImage(data,list)
}

await sendMovie(`trending/movie/week?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`,TrendImages)
await sendMovie(`movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`,PopularImages)
await sendMovie(`movie/top_rated?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`,TopRatedImages)
await sendMovie(`movie/upcoming?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`,ComingSoonImages)

export {TrendImages,PopularImages,TopRatedImages,ComingSoonImages}