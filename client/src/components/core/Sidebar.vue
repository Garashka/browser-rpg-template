<template>
  <v-navigation-drawer v-model="show" app clipped>
    <v-list dense>
      <SidebarNavItem
        :title="'Home'"
        :route="!isLoggedIn ? '\/' : '/game'"
        :icon="'mdi-view-dashboard'"
      />
      <SidebarNavItem
        v-if="!isLoggedIn"
        :title="'Login'"
        :route="'/login'"
        :icon="'mdi-settings'"
      />
      <SidebarNavItem
        v-if="!isLoggedIn"
        :title="'Register'"
        :route="'/register'"
        :icon="'mdi-settings'"
      />
    </v-list>

    <template v-if="isLoggedIn" v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logout">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {
    SidebarNavItem: () => import("./SidebarNavigationItem.vue")
  },
  computed: {
    show: {
      get() {
        return this.$store.state.window.showLeftDrawer;
      },
      set() {}
    },
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
