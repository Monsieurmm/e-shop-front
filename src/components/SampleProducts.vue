<template>
  <div>
    <Cards :products="products" />
    <v-row justify="center">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" align="center">
        <p class="text-center mb-0">{{ currentPage + 1 }} / {{ pages }}</p>
        <v-btn text>
          <v-icon @click="checkPage(prevUrl)">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="checkPage(nextUrl)">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cards from "./partials/products/Cards";
import api from "../config/api";
export default {
  components: {
    Cards
  },
  data() {
    return {
      dialog: false,
      products: [],
      currentPage: "",
      pages: "",
      prevUrl: "",
      nextUrl: ""
    };
  },
  created() {
    this.getProductsData();
  },
  methods: {
    getProductsData() {
      api()
        .get("/products")
        .then(response => {
          this.products = response.data.products;
          this.currentPage = response.data.currentPage;
          this.pages = response.data.pages;
          this.nextUrl = response.data.nextUrl;
          this.prevUrl = response.data.prevUrl;
        });
    },
    checkPage(url) {
      api()
        .get(url)
        .then(response => {
          this.products = response.data.products;
          this.currentPage = response.data.currentPage;
          this.pages = response.data.pages;
          this.nextUrl = response.data.nextUrl;
          this.prevUrl = response.data.prevUrl;
        });
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none;
}
</style>
