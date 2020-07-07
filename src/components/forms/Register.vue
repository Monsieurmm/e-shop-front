<template>
  <v-content align="center">
    <h1>
      Register Page
    </h1>
    <v-form>
      <v-row justify="center">
        <v-col cols="6" xs="12" sm="4" md="4" lg="4">
          <v-text-field v-model="username" label="username"></v-text-field>
          <v-text-field
            v-model="email"
            label="mail address"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="register">Register</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <a href="/login">I already have an account, i log in.</a>
  </v-content>
</template>

<script>
import AuthenticationService from "../../config/AuthenticationService";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
            username: this.username,
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$emit("showSnackar", `${response.data.msg}`, "green", 4000, "top");
        this.$router.push({
          name: "home"
        });
      } catch (error) {
        this.error = error.response.data.error;
        this.$emit("showSnackbar", `${error}`, "red", 4000, "top")
      }
  }
};
</script>

<style scoped></style>
