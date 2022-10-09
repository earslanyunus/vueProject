<template>
  <div class="row  g-4">
    <SinavSonucCard v-for="item in this._getExams" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import SinavSonucCard from "@/components/shared/sinavSonucCard/SinavSonucCard.vue";
import {mapGetters} from "vuex";
export default {
  components: {SinavSonucCard},
computed:{
    ...mapGetters(['_getExams'])
}}

</script>

