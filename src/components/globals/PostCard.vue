<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';


const props = defineProps({
    postProp: { type: Post, required: true}
})

const account = computed(() => AppState.account)

async function deletePost() {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this post?')
      if (!wantsToDelete) { return }

      await postsService.deletePost(props.postProp.id)
    }
    catch (error){
      Pop.error(error);
      logger.error(error)
    }
}

</script>


<template>
    <div class="col-6 post-card">
        <div class="d-flex align-items-top">
            <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId} }" :title="`Go to ${postProp.creator.name}'s Page`">
                <img :src="postProp.creator.picture" alt="" class="creator-img">
            </router-link>
            <h4 class="ms-2">{{ postProp.creator.name }}</h4>
        </div>
        <p>{{ postProp.createdAt.toLocaleString() }}</p>
        <p><i v-if="postProp.creator.graduated" class="mdi mdi-school"></i></p>
        <h5>{{ postProp.body }}</h5>
        <div class="d-flex justify-content-center">
            <img v-if="postProp.imgUrl" :src="postProp.imgUrl" alt="" class="post-img">
        </div>
        <h1 class="text-end"><i class="mdi mdi-heart selectable"></i>{{ postProp.likes.length}}</h1>
        <button v-if="postProp.creatorId == account?.id" @click="deletePost()" class="btn btn-danger mt-5">DELETE</button>
    </div>


</template>


<style lang="scss" scoped>
.post-card {
    background-color: #e1d5e8;
    color: grey;
    padding: 1em;
    margin: 1.5em;
}

img {
    object-fit: cover;
    object-position: center;
    max-width: 80%;
}

.creator-img {
    height: 10dvh;
    border-radius: 50%;
    aspect-ratio: 1/1;
}

.post-img {
    height:40dvh;
}

</style>