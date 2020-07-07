<template>
  <v-content align="center">
    <h1>
      Login Page
    </h1>
    <v-form>
      <v-row justify="center">
        <v-col cols="6" xs="12" sm="4" md="4" lg="4">
          <v-text-field v-model="email" label="email address"></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="login">Log in</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <a href="/register">I do not have an account yet.</a>
  </v-content>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions({
      LOGIN: "users/LOGIN"
    }),
    login() {
      if (!this.email && !this.password) {
        window.alert("REQUIRED");
      } else {
        let user = {
          email: this.email,
          password: this.password
        };
        this.LOGIN(user);
        this.$emit(
          "showSnackbar",
          "You are now logged in",
          "green",
          4000,
          "top"
        );
        this.$router.push("/");
      }
    }
  }
};
</script>
