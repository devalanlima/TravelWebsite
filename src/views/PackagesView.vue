<template>
    <div class="flex justify-center flex-wrap xl:grid sm:grid-rows-3 sm:grid-cols-4 gap-5 place-items-center w-full sm:h-[760px] px-10 pl-20 pb-10">
        <VerticalBanner 
        class="row-span-2" 
        :title="'Rio de Janeiro'" 
        :local="'Cristo Redentor'" 
        :picture="'/packagesImages/Rio_de_Janeiro.jpg'"
        :price="'300.00'"
        />
        <VerticalBanner 
        class="row-span-2" 
        :title="'Rio Grande do Sul'" 
        :local="'Gramado'" 
        :picture="'/packagesImages/Gramado.jpg'"
        :price="'250.00'"
        />
        <VerticalBanner 
        class="row-span-2" 
        :title="'Bahia'" 
        :local="'Salvador'" 
        :picture="'/packagesImages/Salvador.jpg'"
        :price="'250.00'"
        />
        <VerticalBanner 
        class="row-span-2" 
        :title="'Pará'" 
        :local="'Ilha de Marajó'" 
        :picture="'/packagesImages/Ilha_de_marajo.jpg'"
        :price="'300.00'"
        />
        <HorizontalBanner class="col-span-2"
        :title="'Minas Gerais'" 
        :local="'Serra da Canastra'" 
        :price="'200.00'"
        />
        <HorizontalBanner class="col-span-2" 
        :title="'Amazonas'" 
        :local="'Manaus'" 
        :price="'200.00'"
        />
    </div>
</template>

<script setup>
import HorizontalBanner from '../components/HorizontalBanner.vue';
import VerticalBanner from '../components/VerticalBanner.vue'
</script>