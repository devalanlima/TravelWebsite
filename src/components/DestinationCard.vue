<template>
    <div class="w-full h-44 rounded-xl bg-white/20 p-10 flex flex-col gap-2 font-Montserrat justify-center backdrop-blur border-2 border-t-neutral-400/20 border-l-neutral-400/20 border-r-neutral-600/50 border-b-neutral-600/30">
        <h3 class="font-semibold text-lg text-white/70">{{ props.attraction }}</h3>
        <p class="font-medium text-sm text-white/70 text-justify">{{ props.description }}</p>
        <p class="cursor-pointer font-bold w-fit text-sm text-white/70 after:h-[1px] after:w-0 after:rounded-full hover:after:w-full after:bg-white after:block after:transition-all"
        >Read More</p>
    </div>
</template>

<script setup>
const props = defineProps ({
    attraction: {type: String, default:'Loading...'},
    description: {type: String, default:'Loading...'}
})
</script>