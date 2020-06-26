<template>
  <v-app>
    <LeftNavDrawer />

    <v-content class="mx-4 mb-4">
      <Snackbar />
      <v-snackbar
        :text="text"
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
        <v-btn flat dark @click.native="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
      <router-view v-on:showSnackbar="showSnackbar"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Snackbar from "./components/partials/Snackbar";
import LeftNavDrawer from "./components/partials/LeftNavDrawer";
export default {
  name: "App",

  components: {
    LeftNavDrawer,
    Snackbar
  },

  data: () => ({
    snackbar: false,
    text: "",
    timeout: null,
    y: null,
    x: null,
    mode: null
  }),
  methods: {
    showSnackbar(text, timeout = 3000, yPos = "top", xPos, mode) {
      this.text = text;
      this.timeout = timeout;
      this.y = yPos;
      this.x = xPos;
      this.mode = mode;
      this.snackbar = true;
    }
  }
};
</script>
