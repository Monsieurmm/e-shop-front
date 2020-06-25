<template>
  <v-content>
    <h1>My Cart</h1>
    <div v-for="products in basket" :key="products.id">
      {{ products.price }}
    </div>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    basket: []
  }),
  methods: {
    productsInCart() {
      axios.get("http://localhost:3000/baskets").then(response => {
        this.basket = response.data;
      });
    }
  },
  mounted() {
    this.productsInCart();
  }
};
</script>
