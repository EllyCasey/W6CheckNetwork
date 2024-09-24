<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import { computed, onMounted } from 'vue';
import { adsService } from './services/AdsService.js';
import Pop from './utils/Pop.js';
import AdsCard from './components/globals/AdsCard.vue';

onMounted(() => {
  displayAds()
})

const ads = computed(() => AppState.ads)

async function displayAds() {
  try {
    await adsService.getAds()
  }
  catch (error){
    Pop.error(error);
  }
}


</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="" v-for="ad in ads" :key="ad.title">
      <AdsCard :adsProp="ad"/>
    </div>
    <router-view />
  </main>

</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
