<template>
  <v-content align="center">
    <h1>
      Register Page
    </h1>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field v-model="username" label="username"></v-text-field>
          <v-text-field
            v-model="email"
            label="mail address"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            :rules="passwordRules"
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
import { mapActions } from "vuex";
export default {
  data: () => ({
    error: "",
    snackbar: false,
    text: "",
    username: "",
    email: "",
    emailRules: [
      v => !!v || "email is required",
      v =>
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])+$/.test(
          v
        ) || "email must be valid"
    ],
    password: "",
    passwordRules: [
      v => v.length >= 8 || "Password length must be at least 8 character long",
      v =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[A-Za-z\d@$!%*?&^]).{8,}$/.test(
          v
        ) ||
        "Password must have at least one Uppercase, one Lowercase, a number and a special character"
    ]
  }),
  methods: {
    ...mapActions({
      REGISTER: "users/REGISTER"
    }),
    register() {
      if (this.username && this.email && this.password) {
        let user = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        this.REGISTER(user);
      } else if (!this.username || !this.email || !this.password) {
        this.$emit(
          "showSnackbar",
          "You must fill the fields !",
          "red",
          4000,
          "top"
        );
      }
    }
  }
};
</script>
