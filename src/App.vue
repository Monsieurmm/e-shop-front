<template>
  <v-app>
    <LeftNavDrawer />

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
  </v-app>
</template>

<script>
import LeftNavDrawer from "./components/partials/LeftNavDrawer";
export default {
  name: "App",

  components: {
    LeftNavDrawer
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
