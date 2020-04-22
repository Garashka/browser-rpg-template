<template>
  <v-app id="">
    <core-sidebar />

    <core-view />

    <core-header />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  components: {
    CoreView: () => import("@/components/core/View"),
    CoreSidebar: () => import("@/components/core/Sidebar"),
    CoreFooter: () => import("@/components/core/Footer"),
    CoreHeader: () => import("@/components/core/Header")
  },

  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style></style>
