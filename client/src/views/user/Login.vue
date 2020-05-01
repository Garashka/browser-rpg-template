<template>
  <v-card class="container-card" outlined>
    <v-tabs v-model="tab">
      <v-tab>Log In</v-tab>
      <v-tab>Sign Up</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <AccountLogin />
      </v-tab-item>
      <v-tab-item>
        <AccountRegister />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import AccountLogin from "@/components/user/AccountLogin.vue";
import AccountRegister from "@/components/user/AccountRegister.vue";
// import AuthServices from "@/services/authentication.services.js";

export default {
  components: {
    AccountLogin,
    AccountRegister
  },
  props: {
    defaultRegister: Boolean
  },
  data() {
    return {
      tab: 0
    };
  },
  created() {
    if (this.defaultRegister === true) {
      this.tab = 1;
    }
  }
};
</script>

<style scoped>
.container-card {
  margin: auto;
  max-width: 800px;
  padding: 20px;
}
</style>
