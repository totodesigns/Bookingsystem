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

let goToRegister = () => {
    router.push("/registrationForm");
};

let goToTrainer = () => {
    router.push("/trainer");
};

</script>

<template>
    <NavBar />
    <div class="trainerCardWrapper">
      <h1>Admin Oversigt</h1>
      <br><br>
        <div class="trainerCard">
            <h3>Opret ny tid</h3>
            <button @click="goToPostSession">Vælg</button>
        </div>
        <div class="trainerCard">
            <h3>Se alle kommende sessioner</h3>
            <button @click="goToSessions">Vælg</button>
        </div>
        <div class="trainerCard">
            <h3>Registrer ny træner</h3>
            <button @click="goToRegister">Vælg</button>
        </div>
            <button class="logoutbtn" @click="goToTrainer">Log ud</button>
    </div>



</template>

<style scoped>
.trainerCardWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-left: 4vw;
}

.trainerCard {
    padding: 16px;
    border: 1px solid black;
    width: fit-content;
}

.logoutbtn{
  display: flex;
}
</style>