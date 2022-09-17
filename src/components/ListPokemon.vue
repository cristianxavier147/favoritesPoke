<template>
  <div v-for="(pokemon, index) in listPoke" :key="index">
    <div class="flex flex-row items-center justify-between border my-2.5 p-5 bg-white text-xl font-medium border-none rounded">
      <span class="cursor-pointer" @click="openModal">{{ pokemon.name }}</span>
      <img src="@/assets/images/favorite.svg" alt="favorite" class="cursor-pointer" />
    </div>
  </div>
  <ModalPokemon :show="isActiveModal" @close="openModal" />
</template>

<script>
import getPokemon from '@/api/getPokemon';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'ListPokemon',
  data() {
    return {
      listPoke: [],
      isActiveModal: false,
    };
  },

  components: {
    ModalPokemon: defineAsyncComponent(() => import('@/components/ModalPokemon')),
  },

  methods: {
    async getPoke() {
      const { data } = await getPokemon.get(`/pokemon`);
      this.listPoke = data.results;
    },

    openModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },

  created() {
    this.getPoke();
  },
};
</script>

<style></style>
