<script setup>
import { Ads } from '@/models/Ads.js';


const props = defineProps({
 adsProp: { type: Ads, required: true}
})
</script>


<template>

<div>
    <img :src="props.adsProp.banner" alt="">
</div>

</template>


<style lang="scss" scoped>

</style>