<template>
  <div class="form-signin  vh-100 d-flex align-items-center justify-content-center">
    <div class="col-4 text-center">
      <i class="fa-solid fa-book mb-4 fs-1"></i>
      <h1 class="h3 mb-3 fw-normal">Sinav Bilgilerinizi Giriniz</h1>

      <div v-if="examId===1">
        <div class="form-floating mb-4">
          <input v-model="TYTexamResult.TURKCE" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Turkce Net</label>
        </div>
        <div class="form-floating mb-4">
          <input v-model="TYTexamResult.SOSYAL" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Sosyal Bilimler Net</label>
        </div>
        <div class="form-floating mb-4">
          <input v-model="TYTexamResult.MATEMATIK" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Matematik Net</label>
        </div>
        <div class="form-floating mb-4">
          <input v-model="TYTexamResult.FEN" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Fen Bilimleri Net</label>
        </div>
      </div>
      <div v-if="examId===2">
        <div class="form-floating mb-4">
          <input v-model="AYTexamResult.SOZEL" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Sosyal Grubu Net</label>
        </div>
        <div class="form-floating mb-4">
          <input v-model="AYTexamResult.MATEMATIK" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Matematik Net</label>
        </div>
        <div class="form-floating mb-4">
          <input v-model="AYTexamResult.SAYISAL" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Sayisal Grubu Net</label>
        </div>

      </div>
      <div v-if="examId===3">
        <div class="form-floating mb-4">
          <input v-model="YDTexamResult.DIL" type="number" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Dil Net</label>
        </div>

      </div>
      <div class="mb-4">
        <select v-model="examId" class="form-select" aria-label="Default select example">
          <option value="0" selected>Sinav Turunu Secin</option>
          <option v-for="exam in exams" :key="exam.id" :value="exam.id">{{ exam.name }}</option>

        </select>
      </div>

      <button @click="onSendExam" class="w-100 btn btn-lg btn-primary mb-3" type="submit">Sinavi Kaydet</button>
      <button @click="onBack" class="w-100 btn btn-lg btn-secondary mb-3" type="submit">Iptal</button>



    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      examId: 0,
      exams: [],
      TYTexamResult: {
        TURKCE: null,
        SOSYAL: null,
        MATEMATIK: null,
        FEN: null
      },
      AYTexamResult: {
        SOZEL: null,
        MATEMATIK: null,
        SAYISAL: null
      },
      YDTexamResult: {
        DIL: null
      }

    }
  },
  computed: {
    ...mapGetters(['_getUserId', '_getClassId','_getUser'])
  },
  mounted() {
    this.$Axios.get('/examCategories')
        .then(response => {
          this.exams = response.data

        })
  },
  methods: {
    onSendExam: function () {
      const controlNull = (currentValue) => currentValue !==null
      const control_tyt_input = Object.values(this.TYTexamResult).every(controlNull)
      const control_ayt_input = Object.values(this.AYTexamResult).every(controlNull)
      const control_ydt_input = Object.values(this.YDTexamResult).every(controlNull)


      if (control_tyt_input || control_ayt_input || control_ydt_input) {
        let sonuc = {
          examCategoryId: this.examId,
          studentId: this._getUserId,
          classId: this._getClassId,
          student:this._getUser
        }
        if (this.examId === 1) {
          sonuc = {
            ...sonuc,
            exam: this.TYTexamResult,

          }
        } else if (this.examId === 2) {
          sonuc = {
            ...sonuc,
            exam: this.AYTexamResult,

          }
        } else if (this.examId === 3) {
          sonuc = {
            ...sonuc,
            exam: this.YDTexamResult,

          }
        }
        this.$Axios.post('/exams', sonuc)
            .then(()=>{
              this.$router.push({name: 'HomePage'})

            })

      }else{
        alert("Lutfen gecerli degerler giriniz")
      }

    },
    onBack(){
      this.$router.go(-1)
    }
  }
}
</script>

