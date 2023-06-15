<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SocialMedia from './components/SocialMedia.vue';
import DinamicBackground from './components/DinamicBackground.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <main class="max-w-screen-2xl px-10 mx-auto h-[730px] mt-10  relative">
    <SocialMedia class="absolute bottom-52"/> 
    <RouterView />
  </main>
  <DinamicBackground class="absolute left-0 top-0 -z-50"/>
</template>
