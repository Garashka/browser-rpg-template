<template>
  <v-card class="container-card" outlined>
    <v-card-title>{{ username }}</v-card-title>
    <v-card-subtitle>{{ title }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: "Test",
      title: "the Newly Created"
    };
  }
};
</script>

<style>
.container-card {
  margin: auto;
  max-width: 800px;
  padding: 20px;
}
</style>
