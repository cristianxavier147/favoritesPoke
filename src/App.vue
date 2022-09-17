<template>
  <PokemonApp />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    PokemonApp: defineAsyncComponent(() => import('@/Pages/PokemonApp')),
  },
};
</script>

<style></style>
