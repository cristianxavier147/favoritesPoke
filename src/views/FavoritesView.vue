<template>
  <div>favorites</div>
  <div class="flex flex-row justify-center gap-4 items-center text-white h-20 fixed bottom-0 inset-x-0 bg-white">
    <ButtonAll />
    <ButtonFavorites />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'FavoritesView',
  components: {
    ButtonAll: defineAsyncComponent(() => import('@/components/ButtonAll.vue')),
    ButtonFavorites: defineAsyncComponent(() => import('@/components/ButtonFavorites')),
  },
};
</script>

<style></style>
