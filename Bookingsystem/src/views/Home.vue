<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

let member = () => {
  router.push("/member")
}

let trainer = () => {
  router.push("/trainer")
}

</script>

<template>
  <div>
    <h1>Velkommen til Strong4life</h1>
    <div class="homeLinks">
      <button type="button" @click="member" class="default-primary-btn">BOOK TID</button>
      <button type="button" @click="trainer" class="default-primary-btn">LOG IND SOM TRÆNER</button>
    </div>
  </div>
</template>

<style scoped>
  .homeLinks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

</style>
