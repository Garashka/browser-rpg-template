<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">Name</v-stepper-step>
      <v-btn @click="next(n)" />
      <v-btn @click="prev(n)" />
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    };
  }
};
</script>

<style></style>
