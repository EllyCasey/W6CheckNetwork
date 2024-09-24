<script setup>
import { Post } from '@/models/Post.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';


const props = defineProps({
    postProp: { type: Post, required: true}
})

async function likePost() {
    try {
      logger.log(props.postProp.id)
    }
    catch (error){
      Pop.error(error);

    }
}
</script>


<template>
    <h1 @click="likePost()" class="text-end"><i class="mdi mdi-heart selectable text-danger" type="button"></i>{{ props.postProp.likes.length}}</h1>
    <p>hello</p>
</template>


<style lang="scss" scoped>

</style>