<template>
  <v-app>
    <Navbar />

    <v-content class="mx-4 mb-4">
      <v-snackbar
        :text="text"
        :color="color"
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :right="x === 'right'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        v-model="snackbar"
      >
        {{ text }}
        <v-btn text dark @click.native="snackbar = false">
          <v-icon green text>close</v-icon>
        </v-btn>
      </v-snackbar>

      <router-view v-on:showSnackbar="showSnackbar"></router-view>
    </v-content>
    <v-footer color="white lighten-4" padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    snackbar: false,
    text: "",
    color: "",
    timeout: null,
    y: null,
    x: null,
    mode: null
  }),
  methods: {
    showSnackbar(text, color, timeout = 3000, yPos = "top", xPos, mode) {
      this.text = text;
      this.color = color;
      this.timeout = timeout;
      this.y = yPos;
      this.x = xPos;
      this.mode = mode;
      this.snackbar = true;
    }
  }
};
</script>
