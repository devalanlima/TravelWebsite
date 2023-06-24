<template>
    <div class=" w-full sm:h-44 bg-white/20 border-t-neutral-400/20 border-l-neutral-400/20 border-r-neutral-600/50 border-b-neutral-600/30 backdrop-blur rounded-xl overflow-hidden border-2">
        <div class="flex flex-col sm:flex-row  justify-between items-center h-full gap-3 font-Montserrat p-5 text-white/70">
            <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-bold">{{ props.title }}</h3>
                <ul class="flex flex-col font-medium text-sm text-justify list-disc list-inside">
                    <li>{{ props.local }}</li>
                    <li>Round trip</li>
                    <li>03 Days</li>
                </ul>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between gap-2 sm:gap-10">
                    <div class="flex flex-col ">
                        <p class="font-medium text-sm text-justify">From</p>
                        <p class="text-2xl font-bold flex items-center gap-2"><span class="text-lg">$</span>{{ props.price }}</p>
                        <p class="font-light">+ FEES</p>
                    </div>
                    <MainButton/>
                </div>
                <div class="border-t-2 border-white/50 py-1">
                    <p class="text-center text-sm">UP TO 10 INTEREST-FREE INSTALLMENTS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainButton from './MainButton.vue'

const props = defineProps({
    title: {type: String, default: 'Loading Title...'},
    local: {type: String, default: 'Loading Local...'},
    price: {type: String, default: '000.00'},
})
</script>