<script setup>

import { RouterLink, RouterView } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <Navbar/>

  <RouterView />
</template>

<style scoped>

</style>