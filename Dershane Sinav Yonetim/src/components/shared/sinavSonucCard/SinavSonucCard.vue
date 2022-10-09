<template>
  <div class="col">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">{{ item.examCategory.name }}</h5>
        <p v-for="(items,key) in item.exam" :key="items.id" class="card-text text-primary ">{{ key }}:<span
            class="text-black">{{ items }}<strong></strong></span></p>
        <p class="fw-bold">{{ item.student.fullName }} <span class="text-warning">{{ item.class.name }}</span></p>
        <button @click="deleteExam(item.id)" class="btn btn-secondary ">Kaldir</button>
      </div>
    </div>
  </div>


</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters(['_getExams'])
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
      }

    }
  },
  methods: {
    deleteExam(id){
      let exams = this._getExams
      exams = exams.filter(elm => elm.id !== id)
      this.$store.commit('setExams',exams)
      this.$Axios.delete(`/exams/${id}`)

    }
  }

}
</script>

