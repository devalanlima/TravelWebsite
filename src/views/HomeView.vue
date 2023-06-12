<template>
  <ExploreScreen />
  <div class="grid grid-cols-3 gap-10 px-10 w-full place-items-center pt-10">
    <DestinationCard :attraction="attraction1" :description="description1" />
    <DestinationCard :attraction="attraction2" :description="description2" />
    <DestinationCard :attraction="attraction3" :description="description3" />
  </div>
</template>

<script setup>
import DestinationCard from '../components/DestinationCard.vue';
import ExploreScreen from '../components/ExploreScreen.vue';
import touristPoints from '../services/TouristPoints'
import { useAtualState } from '../stores/AtualState'
import { ref, watch} from 'vue'
const atualState = useAtualState()
const attraction1 = ref('')
const attraction2 = ref('')
const attraction3 = ref('')
const description1 = ref('')
const description2 = ref('')
const description3 = ref('')
watch(()=> atualState.selectedState, (newValue, oldValue)=>{
  attraction1.value = touristPoints[`${newValue}`].attractions.attraction1
  attraction2.value = touristPoints[`${newValue}`].attractions.attraction2
  attraction3.value = touristPoints[`${newValue}`].attractions.attraction3
  description1.value = touristPoints[`${newValue}`].attractions.description1
  description2.value = touristPoints[`${newValue}`].attractions.description2
  description3.value = touristPoints[`${newValue}`].attractions.description3
})

</script>