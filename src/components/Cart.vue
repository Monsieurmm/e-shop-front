<template>
  <v-content>
    <h1>My Cart</h1>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="products in cartItems" :key="products.ID">
        <v-card>
          <v-card-title thin>{{ products.title }}</v-card-title>
          <v-img :src="products.image" height="auto" width="auto" />
          <v-list-item>
            <v-list-item-content class="font-weight-bold"
            >{{ products.price }}€</v-list-item-content
            >
          </v-list-item>

          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" align="center">
              <v-btn @click="removeFromBasket()" class="white--text" align="center" color="red darken-2" rounded>Delete</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  name: "cart",
  data: () => ({
    basket: []
  }),
  methods: {
    productsInCart() {
      axios.get("http://localhost:3000/baskets").then(response => {
        this.basket = response.data;
      });
    },
    removeFromBasket() {

    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    }
  },
  mounted() {
    this.productsInCart();
  }
};
</script>
