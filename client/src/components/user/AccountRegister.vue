<template>
  <v-form>
    <v-container fluid>
      <v-row class>
        <v-col>
          <v-text-field v-model="username" label="Username" type="text" name="username" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="password" label="Password" type="password" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="passwordConfirm" label="Confirm Password" type="password" />
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
    password: "",
    passwordConfirm: ""
  }),
  methods: {
    handleRegister() {
      console.log("TODO: Implement registration verification");
      this.$store.dispatch("authentication/register", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
