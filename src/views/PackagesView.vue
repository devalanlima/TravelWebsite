<template>
    <div class="grid grid-rows-3 grid-cols-4 gap-5 place-items-center w-full h-[730px] px-10">
        <VerticalBanner class="row-span-2" />
        <VerticalBanner class="row-span-2" />
        <VerticalBanner class="row-span-2" />
        <VerticalBanner class="row-span-2" />
        <HorizontalBanner class="col-span-2" />
        <HorizontalBanner class="col-span-2" />
    </div>
</template>

<script setup>
import HorizontalBanner from '../components/HorizontalBanner.vue';
import VerticalBanner from '../components/VerticalBanner.vue'
</script>