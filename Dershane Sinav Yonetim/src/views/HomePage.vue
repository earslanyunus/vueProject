<template>
  <div class="d-flex h-100">
    <side-bar @sendData="logData" class="me-2"></side-bar>
    <div class="p-3">
      <SinavCard v-if="this._getExams.length>0" />
      <p v-else> KAYITLI SINAV BULUNAMADI</p>
    </div>
  </div>


</template>

<script>

import SideBar from "@/components/home/sideBar.vue";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
    }
  },
  components: {SideBar},
  computed: {
    ...mapGetters(['_getUserId','_getExams'])
  },
  mounted() {




  },
  created() {
    this.updateData()
  },
  methods: {
    updateData() {
      if (this.$store.getters._isAdmin) {
        this.$Axios.get(`/exams?_expand=class&_expand=examCategory&_expand=student`)
            .then((response) => {
              if (response.data.length > 0) {
                this.exams = response.data
                this.$store.commit('setExams',response.data)
              }
            })
      } else {
        this.$Axios.get(`/exams?studentId=${this._getUserId}&_expand=class&_expand=examCategory&_expand=student`)
            .then((response) => {
              if (response.data.length > 0) {
                this.exams = response.data
                this.$store.commit('setExams',response.data)

              }

            })
      }
    },
    logData(evt) {
      evt = evt.replace(/\s/g, '');
      console.log(this.exams)
      const control_evt = evt == 'TumSinavlar'
      if (!control_evt) {
        this.$Axios.get(`/classes?name=${evt}`)
            .then((response) => {
              const classId = response.data[0].id

              this.$Axios.get(`/exams?classId=${classId}&_expand=class&_expand=examCategory&_expand=student`)
                  .then((response) => {
                    this.exams = response.data
                    this.$store.commit('setExams',response.data)



                  })


            })
      }else {
        this.$Axios.get(`/exams?_expand=class&_expand=examCategory&_expand=student`)
            .then((response) => {
              if (response.data.length > 0) {
                this.exams = response.data
                this.$store.commit('setExams',response.data)

              }
            })
      }


    }


  }
}
</script>

