<template>
  <div class="form-signin vw-100 vh-100 d-flex align-items-center justify-content-center">
    <div class="col-4 text-center">
      <i class="fa-solid fa-book mb-4 fs-1"></i>
      <h1 class="h3 mb-3 fw-normal">Lutfen Uye Ol</h1>

      <div class="form-floating mb-3">
        <input v-model="studentData.fullName" type="email" class="form-control" id="floatingInput"
               placeholder="name@example.com">
        <label for="floatingInput">Isim Soyisim</label>
      </div>
      <div class="form-floating mb-4">
        <input v-model="studentData.password" type="password" class="form-control" id="floatingPassword"
               placeholder="Password">
        <label for="floatingPassword">Sifre</label>
      </div>
      <div class="form-floating mb-4">
        <input v-model="studentData.studentNumber" type="number" class="form-control" id="floatingPassword"
               placeholder="Password">
        <label for="floatingPassword">Ogrenci Numarasi</label>
      </div>
      <div class="mb-4">
        <select v-model="studentData.classId" class="form-select" aria-label="Default select example">
          <option value="0" selected>Sinifinizi Seciniz</option>
          <option v-for="sinif in classes" :key="sinif.id" :value="sinif.id">{{ sinif.name }}</option>
        </select>
      </div>

      <button @click="onRegister" class="w-100 btn btn-lg btn-primary mb-3" type="submit">Kayit Ol</button>
      <router-link class="mt-5 mb-3 " :to="{name:'LoginPage'}">Hesabin varsa GIRIS YAP</router-link>

    </div>
  </div>
</template>

<script>
import CryptoJs from 'crypto-js'
import {mapGetters} from "vuex";

export default ({
  data() {
    return {
      studentData: {
        fullName: null,
        password: null,
        classId: 0,
        studentNumber: null
      },
      classes: null
    }
  },
  mounted() {
    this.$Axios.get('/classes')
        .then((response) => {
          this.classes = response.data
        })
  },
  methods: {
    onRegister() {
      const password = CryptoJs.HmacSHA1(this.studentData.password, this._saltKey).toString()
      const encryptedUserData = {...this.studentData, password: password}
      this.$Axios.post('/students',encryptedUserData)
          .then((response)=>{
            console.log(response)
            this.$router.push({name:"LoginPage"})
          })

    }
  },
  computed: {
    ...mapGetters(["_saltKey"])
  }


})
</script>

