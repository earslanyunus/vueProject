<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination, A11y,} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovieCard from "./movieCard.vue";

const modules = [Navigation, Pagination, A11y,]

const props = defineProps({
  movies: Array
})
const onSlideChange = () => {
}

</script>

<template>
  <div class="">


      <swiper

          :slidesPerView="3"
          :modules="modules"
          :navigation="true"
          :loop="true"
          :spaceBetween="30"
          class=" w-screen"
          :breakpoints="{
            '640':{
              slidesPerView:5
            }
          }"
          @slideChange="onSlideChange"
      >
        <swiper-slide
            v-for="movie in movies"
            :key="movie.id"
            class=""
        >
          <router-link :to="{name:'DetailPage',params:{id:movie.id}}">
         <movieCard :movie="movie" :image="movie.posterUrl"/>
          </router-link>
        </swiper-slide>


      </swiper>
  </div>
</template>