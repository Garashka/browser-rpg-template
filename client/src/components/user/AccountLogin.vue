<template>
  <v-form name="form-login">
    <v-container fluid>
      <v-row class>
        <v-col>
          <v-text-field v-model="username" label="Username" type="text" name="username" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="password" label="Password" type="password" name="password" />
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
      password: ""
    };
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("authentication/login", {
          username: this.username,
          password: this.password
        })
        .then(
          response => {
            this.$store.
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style></style>
