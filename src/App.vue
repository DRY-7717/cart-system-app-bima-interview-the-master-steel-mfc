<template>

  <Navbar v-if="route.name != 'checkout-success'" />

  <RouterView />
</template>

<style scoped></style>


<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/icons/partials/Navbar.vue';
import { useRoute } from 'vue-router';
import { Rotate3D } from 'lucide-vue-next';

const route = useRoute();
</script>
