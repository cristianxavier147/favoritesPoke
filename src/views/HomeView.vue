<template>
  <div class="w-96 mx-auto">
    <img src="@/assets/fondoRojo.png" alt="fondo" class="relative left-20 top-40" />
    <img src="@/assets/pikachu.png" alt="pikachu" class="relative bottom-28 left-8" />
  </div>

  <Welcome />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomeView',
  components: {
    Welcome: defineAsyncComponent(() => import('@/components/Welcome')),
  },
};
</script>

<style></style>
