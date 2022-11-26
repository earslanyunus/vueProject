<script setup>
import TheNavbar from "./components/SingleInstance/TheNavbar.vue";
</script>

<template>
  <div class="text-white h-screen w-screen overflow-y-hidden overflow-x-hidden bg-gray-800 grid grid-rows-[1fr_minmax(1rem,auto)]">
    <TheNavbar class="row-start-2 sm:row-start-1"/>
  <router-view class="overflow-y-scroll">
  </router-view>


  </div>
</template>