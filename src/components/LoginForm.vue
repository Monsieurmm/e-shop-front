<template>
  <v-content>
    <h1>
      Login Page
    </h1>
    <v-form>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field v-model="email" label="mail address"></v-text-field>
          <v-text-field v-model="password" label="password"></v-text-field>
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
// import axios from "axios";
import { mapActions } from "vuex";
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    ...mapActions({
      LOGIN: "users/LOGIN"
    }),
    login() {
      if (!this.mail && !this.password) {
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
        this.$router.push("/profile");
      }
    }
  }
};
</script>
