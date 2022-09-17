<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl">Welcome to pokédex</h1>
    <p class="text-gray-500 text-center p-8">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    <router-link to="/about">
      <button class="rounded-2xl bg-red-500 p-2 w-32 text-white">Get started</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style></style>
