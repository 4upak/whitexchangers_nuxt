<template>
  <v-text-field
    label="From currency"
    v-model="FromSearchItem"
    @input="searchFrom"

  >
  </v-text-field>
  <template
      v-if="FromSearchItem.length > 0"
  >
    <template
        v-for="(item, i) in getCurrenciesFromLists"

    >
      <template

          v-if="getCurrenciesFromLists.length > 0 && item.active == true"
      >
        <v-list density="compact"
                :key="i"
        >
          <template v-for="(currency, j) in item.tag_currencies">
            <v-list-item
                :key="j"
                :value="currency"
                active-color="primary"
                @click="this.setFromCode(currency.code_name)"
                v-if = "currency.active == true"
            >
              <v-list-item-title v-text="currency.name"></v-list-item-title>
            </v-list-item>
          </template>
        </v-list>

      </template>
    </template>

  </template>




</template>

<script>

import { mapActions, mapGetters } from "vuex";
export default {
  name: "ToList",
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
  },

}
</script>

<style scoped>

</style>
