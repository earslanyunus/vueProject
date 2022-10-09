<template>
  <div class="d-flex flex-column justify-content-between flex-shrink-0 p-3 bg-light h-100" style="width: 280px;">
    <div>
      <a href="/sinav_yonetim/public"
         class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"/>
        </svg>
        <span class="fs-4">DSYS</span>
      </a>
      <hr>
      <div v-if="!this.$store.getters._isAdmin">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a @click="updateExams" href="#" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home"/>
              </svg>
              Sinavlarim
            </a>
          </li>

        </ul>
      </div>
      <div v-else>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a @click="updateExams" id="tumsinavlar" href="#" class="nav-link active active-nav-link"
               aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home"/>
              </svg>
              Tum Sinavlar
            </a>
          </li>
          <li class="nav-item mt-2 " v-for="sinif in classes" :key="sinif.id">
            <a @click="updateExams" href="#" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home"/>
              </svg>
              {{ sinif.name }}

            </a>
          </li>
        </ul>
      </div>
    </div>


    <div>
      <div v-if="!this.$store.getters._isAdmin">
        <button @click="this.$router.push('NewExam')" class="btn btn-primary w-100">Sinav Ekle</button>
      </div>
      <hr>
      <div class="dropdown" v-if="_isLogin">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
           data-bs-toggle="dropdown" aria-expanded="false">
          <strong>{{ this.$store.getters._getUser.fullName }}</strong>
        </a>
        <ul class="dropdown-menu text-small shadow">

          <!--        <li><a class="dropdown-item" href="#" @click="onLogout">Sign out</a></li>-->
          <li>
            <router-link @click="onLogout" class="dropdown-item" :to="{name:'LoginPage'}">Cikis Yap</router-link>
          </li>
        </ul>
      </div>
      <div v-else>
        <button @click="this.$router.push({name:'LoginPage'})" class="btn btn-primary w-100">Giris Yap</button>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default ({
  data() {
    return {
      classes: null,
      selectedList: null
    }
  },
  computed: {
    ...mapGetters(["_isLogin"])
  },
  mounted() {
    this.$Axios.get('/classes')
        .then((response) => {
          this.classes = response.data || []
        })
  },
  methods: {
    onLogout() {
      this.$store.commit('setLogout');
    },
    updateExams(evt) {
      if (!evt.target.classList.contains('active-nav-link')){
        this.$emit('sendData',evt.target.text)
      }
      this.$el.querySelectorAll('.nav-link').forEach(elm => {
        elm.classList.remove('active-nav-link')
      })
      evt.target.classList.add('active-nav-link')





    },

  }
})
</script>