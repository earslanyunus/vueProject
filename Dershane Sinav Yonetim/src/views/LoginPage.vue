<template>
  <div class="form-signin vw-100 vh-100 d-flex align-items-center justify-content-center">
    <div class="col-4 text-center">
      <i class="fa-solid fa-book mb-4 fs-1"></i>
      <h1 class="h3 mb-3 fw-normal">Lutfen Giris Yapin</h1>

      <div class="form-floating mb-3">
        <input v-model="studentNumber" type="number" class="form-control" id="floatingInput" placeholder="">
        <label for="floatingInput">Ogrenci Numarasi</label>
      </div>
      <div class="form-floating mb-4">
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Sifre</label>
      </div>

      <button @click="onLogin" class="w-100 btn btn-lg btn-primary" type="submit">Giris Yap</button>
      <p class=""></p>
      <router-link class="mt-5 mb-3 " :to="{name:'RegisterPage'}">Uye Ol</router-link>
    </div>
  </div>
</template>

<script>
import CryptoJs from "crypto-js";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      studentNumber: null,
      password: null

    }
  },
  methods: {
    onLogin() {
      const adminNumbers=[10,11,12,13]
      const password = CryptoJs.HmacSHA1(this.password, this._saltKey).toString()
      if (adminNumbers.indexOf(this.studentNumber)>-1){
        this.$Axios.get(`/students?studentNumber=${this.studentNumber}&password=${password}`)
            .then((response) => {
              if (response.data.length > 0) {
                this.$store.commit('setUser', response.data[0])
                this.$store.commit('setAdmin', true)
                this.$router.push({name: "HomePage"})
              }else{
                alert('Boyle bir kullanici bulunamadi')
              }
            })
      }else{
        this.$Axios.get(`/students?studentNumber=${this.studentNumber}&password=${password}`)
            .then((response) => {
              if (response.data.length > 0) {
                this.$store.commit('setUser', response.data[0])
                this.$router.push({name: "HomePage"})
              }else{
                alert('Boyle bir kullanici bulunamadi')
              }
            })
      }
    }
  },
  computed: {
    ...mapGetters(['_saltKey'])
  }
}
</script>

