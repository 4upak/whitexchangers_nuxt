<template

>
<div class="leftbar">
  <v-card

  >
    <v-tabs
      v-model="tab"
      bg-color="#f7fafc"
      height="60px"
      class="leftbar"
    >
      <v-tab value="one">
        <v-icon
          size="large"
          color="blue"
          class="mx-2"
        >
          mdi-format-list-text
        </v-icon>
        List
      </v-tab>
      <v-tab value="two">
        <v-icon
          size="large"
          color="blue"
          class="mx-2"
        >
          mdi-text-search
        </v-icon>
        Search
      </v-tab>
      <v-tab value="three">
        <v-icon
          size="large"
          color="blue"
          class="mx-2"
        >
          mdi-thumb-up
        </v-icon>
        Popular
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row
            class="mt-5">
            <v-col :cols="cols_num" :md="md" >

                <v-card-title id="from-list">
                  Give
                </v-card-title>
                <from-list />

            </v-col>
            <v-col :cols="cols_num" :md="md" >

                <v-card-title id="to-list">
                  Get
                </v-card-title>
                <to-list />

            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row
            class="mt-5">
            <v-col :cols="cols_num" :md="md">
              <v-card-title>
                Give
              </v-card-title>
              <two-from-list />
            </v-col>
            <v-col :cols="cols_num" :md="md">
              <v-card-title>
                Get
              </v-card-title>
              <two-to-list />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

</div>
</template>

<script>
import FromList from "@/components/FromList";
import ToList from "@/components/ToList";

import TwoFromList from "@/components/TwoFromList";
import TwoToList from "@/components/TwoToList";


export default {
  name: "LeftBar",
  components: {
    "from-list" : FromList,
    "to-list" : ToList,
    "two-from-list" : TwoFromList,
    "two-to-list" : TwoToList,


  },
  data: () => ({
    tab: 'one',
    "cols_num": 12,
    "md": 6
  }),
  mounted() {
    this.$store.dispatch('fetchCurrenciesLists')
    this.changeTab()
    this.changeColNum()
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    changeTab() {
      if(this.isMobile())
        this.tab = 'two'
    },
    changeColNum(){
      if(this.isMobile()){
        this.cols_num = 6
        this.md = 3
      }

    }
  }
}
</script>

<style scoped>

</style>
