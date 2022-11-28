
<script setup>
import {useRoute} from "vue-router";
import {getDetail} from "../composable/FunctionsMovieDb.js";
import {onUnmounted, reactive, ref, useAttrs} from "vue";

const route = useRoute()
let movie = ref([])

const getMovieData = async ()=>{
  try {
    const data =  await getDetail('movie', route.params.id)
    movie.value.push(data)
  }catch (e){
    console.log(e)
  }
}
getMovieData()
const attrs = useAttrs()
onUnmounted(()=>{
movie.value = []
})
</script>

<template>
<h1>{{movie[0]?.original_title}}</h1>
</template>