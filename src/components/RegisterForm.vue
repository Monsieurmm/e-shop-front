<template>
  <v-content>
    <h1>
      Register Page
    </h1>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field
            v-model="mail"
            label="mail address"
            :rules="mailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            :rules="passwordRules"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="confirm password"
            :rules="confirm_passwordRules"
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
    <v-btn @click="snackbarTest">test</v-btn>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    snackbar: false,
    text: "",
    mail: "",
    mailRules: [
      v => !!v || "Mail is required",
      v =>
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])+$/.test(
          v
        ) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => v.length >= 8 || "Password length must be at least 8 character long",
      v =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[A-Za-z\d@$!%*?&^]).{8,}$/.test(
          v
        ) ||
        "Password must have at least one Uppercase, one Lowercase, a number and a special character"
    ],
    confirmPassword: "",
    confirm_passwordRules: [v => !!v || "You must confirm your password"]
  }),
  methods: {
    register() {
      if (this.mail && this.password && this.confirmPassword) {
        let user = {
          mail: this.mail,
          password: this.password
        };
        axios.post("http://localhost:3000/register", user);
        this.$emit('showSnackbar', "You are now registered", 5000, 'bottom')
        this.$router.push("/");
      }
    },
    snackbarTest() {}
  }
};
</script>
