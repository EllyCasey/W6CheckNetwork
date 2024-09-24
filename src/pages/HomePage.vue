<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/globals/PostCard.vue';
import PostForm from '@/components/globals/PostForm.vue';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const posts = computed(() => AppState.posts)

onMounted(() => {
  getAllPosts()
})


async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error){
    Pop.error(error);
    logger.error(error);
  }
}

</script>

<template>
<div class="container-fluid">
<section class="row justify-content-center">
  <div class="col-8">
    <PostForm />
  </div>
</section>

  <div class="row">
    <div v-for="post in posts" :key="post.id" class="col-12 d-flex justify-content-center">
      <PostCard :postProp="post" />
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
