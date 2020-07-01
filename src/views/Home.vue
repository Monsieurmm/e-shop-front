<template>
  <v-container fluid>
    <Slider />
    <Products />
    <NewsLetter />
    <v-footer color="white lighten-4" padless>
      <Footer />
    </v-footer>
  </v-container>
</template>

<script>
import Products from "../components/SampleProducts";
import Slider from "../components/Slider";
import NewsLetter from "../components/partials/NewsLetter";
import Footer from "../components/partials/Footer";

export default {
  components: {
    Products,
    Slider,
    NewsLetter,
    Footer
  },
  data: () => ({
    productsLinks: [
      {
        title: "All products",
        link: "/products"
      },
      {
        title: "Best sales",
        link: "/products"
      }
    ],
    companyLinks: [
      {
        title: "Privacy Center",
        link: "/"
      },
      {
        title: "Cookies",
        link: "/"
      },
      {
        title: "Privacy Center",
        link: "/"
      },
      {
        title: "Terms and Conditions",
        link: "/"
      }
    ],
    accountLinks: [
      {
        title: "Account settings",
        link: "/"
      },
      {
        title: "History Orders",
        link: "/"
      }
    ],
    storeInfos: {
      name: "OK-TIER",
      address: "69 rue du Tilleul",
      city: "Paris",
      mail: "ok-tier@tier.com"
    }
  })
};
</script>
