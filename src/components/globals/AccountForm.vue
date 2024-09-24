<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted, ref } from 'vue';


const editableAccountData = ref({
    name: '',
    bio: '',
    picture: '',
    coverImg: '',
    linkedIn: '',
    github: '',
    class: '',
    graduated: false,

})

onMounted(() => {
    editableAccountData.value = { ...AppState.account }
})

async function updateAccount() {
    try {
      await accountService.updateAccount(editableAccountData.value)
      Pop.success('Account updated!')
    }
    catch (error){
      Pop.error(error);
      logger.error(error)
    }
}

</script>


<template>
    <form @submit.prevent="updateAccount()">
        <div class="mb-2">
            <label for="name" class="form-label">Name:</label>
            <input v-model="editableAccountData.name" type="text" name="name" id="name" class="form-control" maxlength="30">
        </div>
        <div class="mb-2">
            <label for="bio" class="form-label">Bio:</label>
            <textarea v-model="editableAccountData.bio" type="textarea" name="bio" id="bio" class="form-control" maxlength="500"></textarea>
        </div>
        <div class="input-group input-group-sm mb-2 d-flex justify-content-center">
            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="mdi mdi-camera"></i>Profile Photo URL</span>
            <input  v-model="editableAccountData.picture" type="url" class="form-control url-input-field" placeholder="Image url here" name="imgUrl" maxlength="500">
        </div>
        <div class="input-group input-group-sm mb-2 d-flex justify-content-center">
            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="mdi mdi-camera"></i>Cover Img URL</span>
            <input  v-model="editableAccountData.coverImg" type="url" class="form-control url-input-field" placeholder="Image url here" name="imgUrl" maxlength="500">
        </div>
        <div class="mb-2">
            <label for="linkedin" class="form-label">LinkedIn:</label>
            <input v-model="editableAccountData.linkedIn" type="url" name="linkedin" id="linkedin" class="form-control" maxlength="200">
        </div>
        <div class="mb-2">
            <label for="github" class="form-label">GitHub:</label>
            <input v-model="editableAccountData.github" type="url" name="github" id="github" class="form-control" maxlength="200">
        </div>
        <div class="mb-2">
            <label for="class" class="form-label">Class of:</label>
            <input v-model="editableAccountData.class" type="text" name="class" id="class" class="form-control" maxlength="20">
        </div>
        <div class="mb-4">
            <label for="accountGraduated" class="form-label me-3">Have You Graduated?</label>
            <input v-model="editableAccountData.graduated" type="checkbox" name="accountGraduated" id="accountGraduated">
        </div>
        <div class="mb-3">
            <button class="btn btn-success">Save Changes</button>
        </div>
    </form>

</template>


<style lang="scss" scoped>

textarea {
    height: 5em;
}

</style>