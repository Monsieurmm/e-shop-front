<template>
  <v-list>
    <v-list-item v-for="products in basket" :key="products.ID"></v-list-item>
  </v-list>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    basket: []
  }),
  methods: {
    getBasket() {
      axios.get("http://localhost:3000/basket").then(response => {
        this.basket = response.data;
      });
    }
  },
  mounted() {
    this.getBasket();
  }
};
</script>
