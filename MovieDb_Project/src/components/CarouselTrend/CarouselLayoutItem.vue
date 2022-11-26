<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Scrollbar, A11y} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {inject, toRaw} from "vue";

const onSwiper = (swiper) => {
}
const onSlideChange = () => {
}
const onSwiperClick = (evt) => {
  const data = toRaw(evt)
}
const data = inject('TrendImages')
const module = [Navigation, Scrollbar, A11y]
</script>

<template>

  <swiper
      :modules="module"
      class="h-[30vh] md:h-[35vh] w-full"
      :space-between="0"
      :navigation="true"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @click="onSwiperClick"

  >

    <swiper-slide
        v-for="item in data"
        :key="item.id"
        class="relative"
        :title="item.title"
        :id="item.id"


    >
      <div class="relative w-full h-full after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[rgba(20,20,20,0.9)]">
        <img
            class="object-cover  h-full w-full "
            :src="item.imageUrl"
            alt="">
      </div>
      <div class="absolute top-3/4 left-[10%] font-bold">{{ item.title }}</div>

    </swiper-slide>
  </swiper>

</template>