<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in sliders" :key="i" :src="slide.src">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("sliders/GET_SLIDERS")
  },
  computed: {
    ...mapState("sliders", ["sliders"])
  }
};
</script>
