<template>
    <div
        class="w-full rounded-xl bg-white/20 p-10 flex flex-col gap-2 font-Montserrat justify-center backdrop-blur border-2 border-t-neutral-400/20 border-l-neutral-400/20 border-r-neutral-600/50 border-b-neutral-600/30">
        <h3 ref="h3" class="font-semibold text-lg text-white/70">{{ props.attraction }}</h3>
        <p ref="text" class="font-medium text-sm text-white/70 text-justify min-h-[40px]">
            {{ props.description.slice(0, 50) }}<span class="threePoints" v-if="!isClicked">...</span><span v-if="isClicked"
                class="restText">{{ props.description.slice(100) }}</span>
        </p>
        <button @click="readMore"
            class="cursor-pointer font-bold w-fit text-sm text-white/70 after:h-[1px] after:w-0 after:rounded-full hover:after:w-full after:bg-white after:block after:transition-all">
            <span v-if="!isClicked">Read More</span>
            <span v-if="isClicked">Read Less</span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    attraction: { type: String, default: 'Loading...' },
    description: { type: String, default: 'Loading...' }
})

import { ref, watch } from 'vue'

const isClicked = ref(false)
const readMore = () => {
    if (!isClicked.value) {
        isClicked.value = true
    } else {
        isClicked.value = false
    }
}

import { useAtualState } from '../stores/AtualState'
const atualState = useAtualState()
watch(()=>atualState.selectedState, ()=>{
    isClicked.value = false
})
</script>