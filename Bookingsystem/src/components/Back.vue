<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

let back = () => {
  // Replace 'home' with the name of the route you want to navigate to
  router.push('/bookstart');
}

</script>
<template>
    <button type="button" @click="back" class="icon-tertiary-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" class="grey-i"/>
        </svg>
        TILBAGE TIL FORSIDEN
        </button>
</template>