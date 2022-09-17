<template>
  <Transition>
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container relative">
          <!-- <button class="modal-default-button absolute right-0" @click="$emit('close')">OK</button> -->
          <div class="absolute right-6 top-6">
            <img class="cursor-pointer" src="@/assets/images/close.svg" @click="$emit('close')" alt="close" />
          </div>

          <div class="fondoPoke w-full h-52"></div>

          <!-- description -->
          <div class="p-7">
            <div class="border-b-2 py-2">
              <span>Name:</span>
            </div>

            <div class="border-b-2 py-2">
              <span>Weight:</span>
            </div>

            <div class="border-b-2 py-2">
              <span>Height:</span>
            </div>

            <div class="border-b-2 py-2">
              <span>Types:</span>
            </div>

            <div class="flex justify-between mt-4">
              <button class="w-9/12 bg-red-500 p-3 rounded-3xl text-white">Share to my friends</button>
              <img src="@/assets/images/favorite.svg" alt="favorite" class="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-for="poke in listDescriptionPoke" :key="poke.id">
        {{ poke.name }}
      </div> -->
    </div>
  </Transition>
</template>

<script>
import getDescriptionPokemon from '@/api/getDescriptionPokemon';

export default {
  name: 'ModalPokemon',
  data() {
    return {
      listDescriptionPoke: [],
    };
  },
  props: {
    show: Boolean,
  },

  methods: {
    async getDescriptionPoke() {
      const { data } = await getDescriptionPokemon.get(`/1`);
      this.listDescriptionPoke = data;
      console.log(this.listDescriptionPoke);
    },
  },

  created() {
    this.getDescriptionPoke();
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 340px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.fondoPoke {
  background-image: url('@/assets/images/fondoPoke.png');
  background-repeat: no-repeat;
  background-position: 53%;
}
</style>
