<template>
  <nav class="flex items-center max-w-screen-2xl mx-auto px-10 pt-10">
    <h1><img src="/logo_equator.svg" alt="Equator logo"></h1>
    <ul class="flex items-center gap-16 mx-auto font-Montserrat text-lg font-semibold">
      <li>
        <RouterLink to="/"> Destinations </RouterLink>
      </li>
      <li>
        <RouterLink to="/packages"> Packages </RouterLink>
      </li>
      <li>
        <RouterLink to="/about"> About us </RouterLink>
      </li>
    </ul>
    <div class="relative w-[30px] h-[3px] bg-white rounded-full before:rounded-full before:w-[30px] before:h-[3px] before:block before:absolute before:top-[10px] before:bg-white after:w-[20px] after:h-[3px] after:block after:absolute after:top-[20px] after:bg-white after:right-0 after:rounded-full"></div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>