<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="showLeftDrawer = !showLeftDrawer" />
    <v-toolbar-title>{{ this.$store.state.window.title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    showLeftDrawer: {
      get() {
        return this.$store.state.window.showLeftDrawer;
      },
      set(value) {
        this.$store.commit("showLeftDrawer", value);
      }
    }
  }
};
</script>

<style></style>
