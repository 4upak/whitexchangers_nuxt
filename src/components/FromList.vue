<template>
  <v-text-field
    label="Type from currency"
    v-model="FromSearchItem"
    @input="searchFrom"
    id="from-list"
  >

  </v-text-field>
  <template
    v-for="(item, i) in getCurrenciesFromLists"
  >
    <div
        :key="i"
        v-if="getCurrenciesFromLists.length > 0 && item.active == true"
    >



      <v-card-title
          class="tag_title"
      >
        {{ item.name }}
      </v-card-title>

      <v-list
          density="compact"
      >
        <template v-for="(currency, j) in item.tag_currencies">
          <v-list-item
            :key="j"
            :value="currency"
            active-color="primary"
            @click="this.setFromCode(currency.code_name); scrollTo()"
            v-if = "currency.active == true"

            :class="{ 'v-list-item--active': currency.code_name == fromSelectedItem }"

          >
            <v-list-item-title>
              {{ currency.name }}
            </v-list-item-title>

          </v-list-item>
        </template>
      </v-list>

    </div>

  </template>






</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FromList",

  data: () => ({
    fromSelectedItem: 0,
    FromSearchItem: "",
  }),

  computed: {
    ...mapGetters(["getCurrenciesFromLists"]),
  },
  methods: {
    ...mapActions(["setFromCode"]),
    searchFrom() {
      this.$store.dispatch("searchFrom", this.FromSearchItem);
    },
    scrollTo() {
      document.getElementById("to-list").scrollIntoView( { behavior: "smooth",  } );
    },

  },

}
</script>

<style scoped>

</style>
