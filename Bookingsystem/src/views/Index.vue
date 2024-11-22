<script setup>
import { useRouter } from 'vue-router';

import NavBar from "@/components/NavBar.vue";

const router = useRouter();

let bookstart = () => {
  router.push("/bookstart")
}

</script>

<template>
  <NavBar/>
    <button type="button" @click="bookstart" class="default-primary-btn">
      til bookingsystem
    </button>
</template>