<template>
  <nav class="flex items-center justify-around sm:justify-between max-w-screen-2xl mx-auto sm:px-10 sm:pt-10">
    <h1 class="w-20 sm:w-fit sm:block"><img src="/logo_equator.svg" alt="Equator logo"></h1>
    <ul class="flex sm:flex-row sm:items-center justify-center gap-4 sm:gap-10 md:gap-16 font-Montserrat text-sm sm:text-lg font-semibold">
      <li class="group">
        <RouterLink to="/"
          :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'home', 'after:w-0': route.name !== 'home' }]">
          Destinations</RouterLink>
      </li>
      <li>
        <RouterLink to="/packages"
          :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'packages', 'after:w-0': route.name !== 'packages' }]">
          Packages </RouterLink>
      </li>
      <li>
        <RouterLink to="/about"
          :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'about', 'after:w-0': route.name !== 'about' }]">
          About us </RouterLink>
      </li>
    </ul>
    <button class="h-7 w-[34px] flex justify-end group sm:ml-3 md:ml-24">
      <div
        class="transition-all after:transition-all relative w-[30px] h-[3px] bg-white rounded-full before:rounded-full before:w-[30px] before:h-[3px] before:block before:absolute before:top-[10px] before:right-0 before:bg-white after:w-[20px] after:h-[3px] after:block after:absolute after:top-[20px] after:bg-white after:right-0 after:rounded-full group-hover:w-[20px] group-hover:after:w-[30px]">
      </div>
    </button>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()
</script>