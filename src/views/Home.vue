<template>
  <v-container fluid>
    <Slider v-if="window.width > 850" />
    <SampleProducts />
    <NewsLetter />
  </v-container>
</template>

<script>
import SampleProducts from "../components/SampleProducts";
import Slider from "../components/Slider";
import NewsLetter from "../components/partials/NewsLetter";

export default {
  components: {
    SampleProducts,
    Slider,
    NewsLetter,
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
    },
    window: {
      width: 0,
      height: 0
    }
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>
