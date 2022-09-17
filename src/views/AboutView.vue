<template>
  <div class="px-7 pt-7 pb-20">
    <Search />
    <ListPokemon />
  </div>
  <div class="flex flex-row justify-center gap-4 items-center text-white h-20 fixed bottom-0 inset-x-0 bg-white">
    <ButtonAll />
    <ButtonFavorites />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'AboutView',
  components: {
    Search: defineAsyncComponent(() => import('@/components/Search')),
    ListPokemon: defineAsyncComponent(() => import('@/components/ListPokemon')),
    ButtonAll: defineAsyncComponent(() => import('@/components/ButtonAll')),
    ButtonFavorites: defineAsyncComponent(() => import('@/components/ButtonFavorites')),
  },
};
</script>

<style></style>
