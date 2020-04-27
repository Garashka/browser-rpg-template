<template>
  <v-form ref="form">
    <v-container fluid>
      <v-row class>
        <v-col>
          <v-text-field
            v-model="username"
            label="Username"
            type="text"
            name="username"
            :rules="usernameRules"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            name="password"
            :rules="passwordRules"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="handleLogin">Log In</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      if (this.$refs.form.validate() === true) {
        this.$store
          .dispatch("authentication/login", {
            username: this.username,
            password: this.password
          })
          .then(
            response => {
              console.log(response);
              this.$router.push("/profile");
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    validate() {
      if (this.username == "") {
        console.log("Please enter your username.");
        return false;
      }
      if (this.password == "") {
        console.log("Please enter your password.");
        return false;
      }
      return true;
    }
  }
};
</script>

<style></style>
