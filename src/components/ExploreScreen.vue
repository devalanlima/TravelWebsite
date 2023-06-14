<template>
    <div id="explore" class=" max-w-full h-[500px] pl-14 px-20 mx-auto mr-auto overflow-y-scroll grid place-items-center">
        <div class="h-[500px] grid">
            <div class="font-Montserrat text-center flex flex-col gap-3 my-auto">
                <h2 class="font-normal text-3xl text-white tracking-[0.8rem]">EXPLORE</h2>
                <h2 class=" font-bold text-9xl text-white/75">BRAZIL</h2>
            </div>
        </div>
        <div class="h-[500px] grid place-items-center relative">
            <h3 class="absolute text-2xl font-Montserrat -left-20 bottom-20">{{ stateName }}</h3>
            <BrazilMap class="opacity-75 select-none" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import BrazilMap from './BrazilMap.Vue'
import touristPoints from '../services/TouristPoints';
import { useAtualState } from '../stores/AtualState';

const atualState = useAtualState()

const stateName = ref(touristPoints.Amazonas.state)

watch(() => atualState.selectedState, () => {
    switch (atualState.selectedState) {
        case 'Acre':
            stateName.value = touristPoints.Acre.state
            break;
        case 'Alagoas':
            stateName.value = touristPoints.Alagoas.state
            break;
        case 'Amapa':
            stateName.value = touristPoints.Amapa.state
            break;
        case 'Amazonas':
            stateName.value = touristPoints.Amazonas.state
            break;
        case 'Bahia':
            stateName.value = touristPoints.Bahia.state
            break;
        case 'Ceara':
            stateName.value = touristPoints.Ceara.state
            break;
        case 'DistritoFederal':
            stateName.value = touristPoints.DistritoFederal.state
            break;
        case 'EspiritoSanto':
            stateName.value = touristPoints.EspiritoSanto.state
            break;
        case 'Goias':
            stateName.value = touristPoints.Amapa.state
            break;
        case 'Maranhao':
            stateName.value = touristPoints.Maranhao.state
            break;
        case 'MatoGrosso':
            stateName.value = touristPoints.MatoGrosso.state
            break;
        case 'MatoGrossoDoSul':
            stateName.value = touristPoints.MatoGrossoDoSul.state
            break;
        case 'MinasGerais':
            stateName.value = touristPoints.MinasGerais.state
            break;
        case 'Para':
            stateName.value = touristPoints.Para.state
            break;
        case 'Paraiba':
            stateName.value = touristPoints.Paraiba.state
            break;
        case 'Parana':
            stateName.value = touristPoints.Parana.state
            break;
        case 'Pernambuco':
            stateName.value = touristPoints.Pernambuco.state
            break;
        case 'Piaui':
            stateName.value = touristPoints.Piaui.state
            break;
        case 'RioDeJaneiro':
            stateName.value = touristPoints.RioDeJaneiro.state
            break;
        case 'RioGrandeDoNorte':
            stateName.value = touristPoints.RioGrandeDoNorte.state
            break;
        case 'RioGrandeDoSul':
            stateName.value = touristPoints.RioGrandeDoSul.state
            break;
        case 'Rondonia':
            stateName.value = touristPoints.Rondonia.state
            break;
        case 'Roraima':
            stateName.value = touristPoints.Roraima.state
            break;
        case 'SantaCatarina':
            stateName.value = touristPoints.SantaCatarina.state
            break;
        case 'SaoPaulo':
            stateName.value = touristPoints.SaoPaulo.state
            break;
        case 'Sergipe':
            stateName.value = touristPoints.Sergipe.state
            break;
        case 'Tocantins':
            stateName.value = touristPoints.Tocantins.state
            break;
        default:
            break;
    }
})



</script>

<style scoped>
#explore {
    scrollbar-width: thin;
    scrollbar-color: white rgb(59, 59, 59);
}

#explore::-webkit-scrollbar {
    width: 1px;
}

#explore::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.342);
}

#explore::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    outline: 1px solid rgba(255, 255, 255, 0.486);
}
</style>