<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from '@/components/globals/AccountForm.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <AccountForm />
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
