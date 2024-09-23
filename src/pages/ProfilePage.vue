<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

onMounted(() => {
    getProfileById()
})

async function getProfileById() {
    try {
      const profileId = route.params.profileId
      logger.log('user ID:', profileId);
      await profilesService.getProfileById(profileId)
    }
    catch (error){
      Pop.error(error);
      logger.error(error)
    }
}
</script>


<template>
 <div v-if="profile" class="container">
    <section class="row cover-img" :style="{backgroundImage: `url${profile.coverImg}`}">
        <div class="col-12">
            <img :src="profile.picture" alt="" class="creator-img">
            <h2>{{ profile.name }}</h2>
            <h4>{{ profile.bio }}</h4>
            <p>{{ profile.createdAt.toLocaleString() }}</p>
            <a v-if="profile.linkedIn" :href="profile.linkedIn" target="_blank">
                <i class="mdi mdi-linkedin fs-1"></i>
            </a>
            <a v-if="profile.github" :href="profile.github" target="_blank">
                <i class="mdi mdi-github fs-1"></i>
            </a>
            <i v-if="profile.graduated" class="mdi mdi-school"> </i>
            <p>Class of {{ profile.class }}</p>
        </div>
    </section>
 </div>

</template>


<style lang="scss" scoped>
.cover-img {
    min-height: 40dvh;
    background-size: cover;
}

.creator-img {
    height: 10dvh;
    border-radius: 50%;
    aspect-ratio: 1/1;
}

</style>