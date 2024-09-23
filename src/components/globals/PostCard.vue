<script setup>
import { Post } from '@/models/Post.js';


defineProps({
    postProp: { type: Post, required: true}
})
</script>


<template>
    <div class="col-8 post-card">
        <div class="d-flex align-items-top">
            <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId} }" :title="`Go to ${postProp.creator.name}'s Page`">
                <img :src="postProp.creator.picture" alt="" class="creator-img">
            </router-link>
            <h4 class="ms-2">{{ postProp.creator.name }}</h4>
        </div>
        <p>{{ postProp.createdAt.toLocaleString() }}</p>
        <p><i class="mdi mdi-school"></i></p>
        <h5>{{ postProp.body }}</h5>
        <img :src="postProp.imgUrl" alt="" class="post-img">
        <h1 class="text-end"><i class="mdi mdi-heart selectable"></i>{{ postProp.likes.length}}</h1>
    </div>


</template>


<style lang="scss" scoped>
.post-card {
    background-color: #e8d5e2;
    color: grey;
    padding: 1em;
    margin: 1.5em;
}

img {
    object-fit: cover;
    object-position: center;
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