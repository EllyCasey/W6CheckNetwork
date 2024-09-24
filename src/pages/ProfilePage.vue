<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/globals/PostCard.vue';
import { postsService } from '@/services/PostsService.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)
const posts = computed(() => AppState.posts)

onMounted(() => {
    getProfileById()
    getPostsById()
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

async function getPostsById() {
    try {
      const profileId = route.params.profileId
      await postsService.getPostsById(profileId)
    }
    catch (error){
      Pop.error(error);
      logger.error(error)
    }
}

</script>


<template>
 <div v-if="profile" class="container-fluid">
    <section class="row cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <div class="col-12 pt-4 banner-card">
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
            <p v-if="profile.class"><i  class="mdi mdi-school"></i>
            Class of {{ profile.class }}</p>
        </div>
    </section>
 </div>
 <section class="container-fluid">
     <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-10 mb-2 d-flex justify-content-center">
            <PostCard :postProp="post" />
        </div>
     </div>
 </section>

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

.banner-card{
    padding-left: 5em;
    color: whitesmoke;
    text-shadow: 0 0 5px black;
}

</style>