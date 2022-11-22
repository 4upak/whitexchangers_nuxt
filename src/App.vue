<template>
  <v-app>
    <v-main>
      <topnavbar />
      <v-container fluid class="main_container">
        <router-view />
      </v-container>
      <bottomnavbar />
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from '@/components/TopNavbar'
import BottomNavbar from "@/components/BottomNavbar";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    topnavbar: TopNavbar,
    bottomnavbar: BottomNavbar
  },
  methods:{
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.$store.dispatch('setMobile', this.isMobile())
    this.$store.dispatch('setFromCurrencyName',localStorage.getItem('fromCurrencyName'))
    this.$store.dispatch('setToCurrencyName',localStorage.getItem('toCurrencyName'))

  },
  computed: {
    ...mapGetters(["getMobileCheck"]),
  },

}
</script>
<style>
@import './assets/css/style.css';
@import './assets/css/responsive.css';
</style>

