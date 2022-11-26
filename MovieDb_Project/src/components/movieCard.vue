<script setup>
const props = defineProps({image:String})
</script>

<template>
  <img :src="image"
       alt=""
       class="object-cover w-[30vw]">

</template>