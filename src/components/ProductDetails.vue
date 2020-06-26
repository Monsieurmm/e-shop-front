<template>
  <v-container fluid>
    <h1>Product details</h1>
    <v-card>
      <v-row>
        <v-col cols="12" xs="12" md="12" lg="12" align="center">
          <h2>{{ product.title }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="12" lg="12" align="center">
          <v-img :src="product.image" height="400px" width="400px" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="12" lg="12" align="center">
          <v-rating
            :value="product.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" md="12" lg="12" align="center">
          ${{ product.price }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" align="center">
          <v-btn align="center">Add</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  data: () => ({
    product: {}
  }),
  methods: {
    getProduct() {
      axios
        .get("http://localhost:3000/products/" + this.$route.params.id)
        .then(response => {
          this.product = response.data;
        });
    }
  },
  created() {
    this.getProduct();
  }
};
</script>
