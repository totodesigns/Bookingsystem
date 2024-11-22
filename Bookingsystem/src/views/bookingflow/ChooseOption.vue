<script setup>
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router';

// Access the router for navigation
const router = useRouter();

let goToPostSession = () => {
    router.push("/postsession");
};

let goToSessions = () => {
    router.push("/sessions");
};

</script>

<template>
    <NavBar />
    <h1>Hvad vil du?</h1>
    <div class="trainerCardWrapper">
        <div class="trainerCard">
            <h2>Opret ny tid</h2>
            <button @click="goToPostSession">Vælg</button>
        </div>
        <div class="trainerCard">
            <h2>Se alle kommende sessioner</h2>
            <button @click="goToSessions">Vælg</button>
        </div>
    </div>
</template>

<style scoped>

.trainerCardWrapper {
    display: flex;
    gap: 12px;
}

.trainerCard {
    padding: 16px;
    border: 1px solid black;
    width: fit-content;
}
</style>