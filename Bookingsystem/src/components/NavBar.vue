<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

let index = () => {
  router.push('/');
}
</script>

<template>
  <nav>
    <button @click="index"><p class="logo t2 body-bold">STRONG4LIFE</p></button>
    <div id="nav-items">
      <button @click="" class="default-tertiary-btn">MEDLEMSKABER</button>
      <button @click="" class="default-tertiary-btn">KONTAKT</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="20" fill="#141414"/>
        <path d="M10 14H30M10 20H30M10 26H30" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </nav>
</template>