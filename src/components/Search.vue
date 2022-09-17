<template>
  <div class="relative rounded shadow-sm mb-6">
    <div class="absolute inset-y-0 left-0 flex items-center">
      <img class="h-4 w-4 mx-4" src="@/assets/images/search.svg" alt="search" />
    </div>
    <input class="shadow-sm rounded pl-10 py-2 w-full" type="search" name="searchPoke" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style>
/* .sombra {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
} */
</style>
