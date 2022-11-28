<script setup>

import router from "../router/index.js";

const props = defineProps({image: String,movie: Object})
</script>

<template>

    <img :src="image"
         alt=""
         class="object-cover w-[30vw]">
</template>