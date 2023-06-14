<template>
    <div>
        <div class="bg-[#0000008c] w-screen h-screen fixed left-0 top-0"></div>
        <img class="w-screen h-screen object-cover fixed -z-10 blur-sm" :src="atualState.selectedBackground" alt="bg">
    </div>
</template>

<script setup>
import { useAtualState } from '../stores/AtualState';
const atualState = useAtualState()
</script>