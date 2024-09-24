<script setup>
import { Account } from '@/models/Account.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';


const editablePostData = ref({
    body: '',
    imgUrl: '',
})

const props = defineProps({
    accountProp: { type: Account, required: true }
})

async function createPost() {
    try {
      logger.log(editablePostData.value)
      await postsService.createPost(editablePostData.value)
      editablePostData.value = {body: '', imgUrl: ''}
    }
    catch (error){
      Pop.error(error);
      logger.error(error)
    }
}

</script>


<template>
 <form>
    <div class="input-group input-group-sm mb-3 mt-3 textarea d-flex justify-content-center">
        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="mdi mdi-post"></i></span>
        <textarea name="body" id="body" class="form-control" placeholder="What do you want to say..."></textarea>
    </div>
    <div class="input-group input-group-sm mb-3 d-flex justify-content-center">
        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="mdi mdi-camera"></i> URL</span>
        <input type="text" class="form-control url-input-field" placeholder="Image url here" name="imgUrl">
    </div>
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary">Post</button>
    </div>
 </form>
</template>


<style lang="scss" scoped>
.url-input-field {
    max-width: 50%;
}

textarea {
    max-width: 70%;
    height: 5em;

}

</style>