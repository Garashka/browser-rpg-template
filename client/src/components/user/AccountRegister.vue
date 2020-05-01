<template>
  <v-form ref="form">
    {{ message }}
    <v-container fluid>
      <v-row class>
        <v-col>
          <v-text-field
            v-model="username"
            label="Username"
            type="text"
            name="username"
            :rules="usernameRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="passwordConfirm"
            label="Confirm Password"
            type="password"
            :rules="[rulePasswordMatching]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="handleRegister">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    username: "",
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 16) || "Username must be 16 characters or less",
      v => (v && v.length >= 4) || "Username must be at least 4 characters"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 30) || "Password must be 30 characters or less",
      v => (v && v.length >= 8) || "Password must be at least 8 characters"
    ],
    passwordConfirm: "",
    message: ""
  }),
  computed: {
    rulePasswordMatching() {
      return () =>
        this.password === this.passwordConfirm || "Passwords must match";
    }
  },
  methods: {
    handleRegister() {
      if (this.$refs.form.validate() === true) {
        this.$store
          .dispatch("auth/register", {
            username: this.username,
            password: this.password
          })
          .then(
            () => {
              this.$router.push("/");
            },
            error => {
              this.message = error.response.data.message;
            }
          );
      }
    }
  }
};
</script>

<style></style>
