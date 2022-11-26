<script setup>
import TheFooter from "../components/SingleInstance/TheFooter.vue";
import Carousel from "../components/CarouselTrend/Carousel.vue";
import {provide} from "vue";
import {
  PopularImages,
  TrendImages,
  TopRatedImages,
  ComingSoonImages

} from "../composable/movieHomePage.js";
import SliderPerView from "../components/SliderPerView.vue";
import SectionTitle from "../components/SectionTitle.vue";


provide('TrendImages', TrendImages)


</script>

<template>
  <div class="grid grid-rows-[auto_auto_auto]">


    <Carousel class=""/>
    <div class="mt-12">
      <SectionTitle class="mb-3 pl-3">Popular Movies</SectionTitle>
      <SliderPerView class="" :movies="PopularImages"/>
    </div>
    <div class="mt-12">
      <SectionTitle class="mb-3 pl-3">Top Rated Movies</SectionTitle>
      <SliderPerView class="" :movies="TopRatedImages"/>
    </div>
    <div class="mt-12">
      <SectionTitle class="mb-3 pl-3">Coming Soon To Theatre</SectionTitle>
      <SliderPerView class="" :movies="ComingSoonImages"/>
    </div>

    <TheFooter class=""/>

  </div>

</template>